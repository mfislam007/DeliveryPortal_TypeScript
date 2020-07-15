import { fetchDocument, createDocument } from "tripledoc";

import Task from "../entities/Task";
import data from "../../settings.json";

/** Updates given task values of given phase */
export async function updateTask(webId: string, newTask: Task, oldTask: Task) {
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
export async function createTask(webId: string, task: Task) {
  const testLocation = doesFileExist(webId + task.name + "/action.ttl");
  if (testLocation === 404) {
    const newDocument = createDocument(webId + task.name + "/action.ttl");
    await newDocument.save();
    let profileDoc = await fetchDocument(webId + task.name + "/action.ttl");
    let profile = profileDoc.getSubject(webId);
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
export async function getTask(webId: string, taskName: string) {
  const profileDoc = await fetchDocument(webId + taskName + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  const task = new Task();
  task.name = profile.getString(data.solid.write.taskName);
  task.description = profile.getString(data.solid.write.taskDescription);
  task.actionStatusType = profile.getString(data.solid.write.taskStatus);
  task.endTime = profile.getDateTime(data.solid.write.endTime);
  return task;
}

/** Returns all task objects from the given phase */
export async function getTasksOfPhase(webId: string) {
  let tasks: Task[] = [];
  getTaskNames(webId).then(arrayOfTaskNames => {
    for (let i = 0; i < arrayOfTaskNames.length; i++) {
      getTask(webId, arrayOfTaskNames[i]).then(task => {
        tasks.push(task);
      });
    }
  });
  return tasks;
}

/** Deletes given taskname from given phase */
export async function deleteTask(webId: string, taskName: string) {
  // BUG (Niko) [This only deletes the reference to the task inside the phases action.ttl file, actual task folder remains]
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId + "/action.ttl");
  profile.removeString(data.solid.write.taskName, taskName);
  await profileDoc.save();
}

/** Returns all task names of given phase in an array */
export async function getTaskNames(webId: string) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId + "/action.ttl");
  return profile.getAllStrings(data.solid.write.taskName);
}

function doesFileExist(urlToFile: string) {
  console.log(urlToFile);
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", urlToFile, false);
  xhr.send();
  return xhr.status;
}
