import { fetchDocument, createDocument } from "tripledoc";

import { doesFileExist } from "../util/controller";
import Task from "../entities/Task";
import data from "../../settings.json";

/** Updates given task values of given phase */
export async function updateTask(webId: string, newTask: Task, oldTask: Task): Promise<void> {
  // BUG (Niko) [The tasks folder isn't renamed, so future reads of task data will fail]
  let profileDoc = await fetchDocument(webId + oldTask.name + "/action.ttl");
  let profile = profileDoc.getSubject(webId);
  profile.setString(data.solid.write.taskName, newTask.name);
  profile.setString(data.solid.write.taskDescription, newTask.description);
  profile.setString(data.solid.write.taskStatus, newTask.actionStatusType);
  profile.setDateTime(data.solid.write.endTime, newTask.endTime);
  await profileDoc.save();

  profileDoc = await fetchDocument(webId + "/action.ttl");
  profile = profileDoc.getSubject(webId + "/action.ttl");
  profile.removeString(data.solid.write.taskName, oldTask.name);
  profile.addString(data.solid.write.taskName, newTask.name);
  await profileDoc.save();
}

/** Creates a new task, folder for it and action.ttl -file to store the details */
export async function createTask(webId: string, task: Task): Promise<void> {
  if (!doesFileExist(webId + task.name + "/action.ttl")) {
    const newDocument = createDocument(webId + task.name + "/action.ttl");
    await newDocument.save();

    let profileDoc = await fetchDocument(webId + task.name + "/action.ttl");
    let profile = profileDoc.getSubject(webId + task.name + "/action.ttl");
    profile.addString(data.solid.write.taskName, task.name);
    profile.addString(data.solid.write.taskDescription, task.description);
    profile.addString(data.solid.write.taskStatus, task.actionStatusType);
    profile.addDateTime(data.solid.write.endTime, task.endTime);
    await profileDoc.save();

    profileDoc = await fetchDocument(webId + "/action.ttl");
    profile = profileDoc.getSubject(webId + "/action.ttl");
    profile.addString(data.solid.write.taskName, task.name);
    await profileDoc.save();
  }
}

/** Returns the task object from requested container */
export async function getTask(webId: string): Promise<Task> {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId + "/action.ttl");

  return {
    name: profile.getString(data.solid.write.taskName),
    description: profile.getString(data.solid.write.taskDescription),
    actionStatusType: profile.getString(data.solid.write.taskStatus),
    endTime: profile.getDateTime(data.solid.write.endTime),
  } as Task;
}

/** Returns all task objects from the given phase */
export async function getTasksOfPhase(webId: string): Promise<Task[]> {
  const taskNames = await getTaskNames(webId);
  console.log(taskNames);
  let tasks: Task[] = new Array<Task>(taskNames.length);

  for (let i = 0; i < taskNames.length; i++) {
    tasks[i] = await getTask(`${webId}${taskNames[i]}`);
  }

  return tasks;
}

/** Deletes given taskname from given phase */
export async function deleteTask(webId: string, taskName: string): Promise<void> {
  // BUG (Niko) [This only deletes the reference to the task inside the phases action.ttl file, actual task folder remains]
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId + "/action.ttl");
  profile.removeString(data.solid.write.taskName, taskName);
  await profileDoc.save();
}

/** Returns all task names of given phase in an array */
export async function getTaskNames(webId: string): Promise<string[]> {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId + "/action.ttl");

  return profile.getAllStrings(data.solid.write.taskName);
}
