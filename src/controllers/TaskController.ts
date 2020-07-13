import { fetchDocument, createDocument } from "tripledoc";
import Task from "../entity/Task";

/** Updates given value */
export async function updateTask(webId: string, task: Task) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  console.log("TaskController: " + webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.setString("https://schema.org/Action#name", task.name);
  profile.setString("https://schema.org/Action#description", task.description);
  profile.setString("https://schema.org/ActionStatusType", task.actionStatusType);
  profile.setDateTime("https://schema.org/endTime", task.endTime);
  const result = await profileDoc.save();
}

/** Creates a new task, folder for it and action.ttl -file to store the details */
export async function createTask(webId: string, task: Task) {
  //creating folder with task name and action.ttl there
  const newDocument = createDocument(webId + task.name + "/action.ttl");
  await newDocument.save();
  const profileDoc = await fetchDocument(webId + task.name + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.setString("https://schema.org/Action#name", task.name);
  profile.setString("https://schema.org/Action#description", task.description);
  profile.setString("https://schema.org/ActionStatusType", task.actionStatusType);
  profile.setDateTime("https://schema.org/endTime", task.endTime);
  const result = await profileDoc.save();
}

/** Returns the task object from requested container */
export async function getTask(webId: string) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  const task = new Task();
  task.name = profile.getString("https://schema.org/Action#name");
  task.description = profile.getString("https://schema.org/Action#description");
  task.actionStatusType = profile.getString("https://schema.org/ActionStatusType");
  task.endTime = profile.getDateTime("https://schema.org/endTime");
  return task;
}
