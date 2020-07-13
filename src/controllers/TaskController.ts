import { fetchDocument } from "tripledoc";
import Task from "../entity/Task";

/** Updates given value */
export async function updateTask(webId: string, task: Task) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  console.log("TaskController: " + webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.setString("https://schema.org/Action#name", task.name);
  profile.setString("https://schema.org/Action#description", task.description);
  profile.setString("https://schema.org/ActionStatusType", task.actionStatusType);
  const result = await profileDoc.save();
}

/** Returns the task object from requested container */
export async function getTask(webId: string) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  const task = new Task("");
  task.name = profile.getString("https://schema.org/Action#name");
  task.description = profile.getString("https://schema.org/Action#description");
  task.actionStatusType = profile.getString("https://schema.org/ActionStatusType");
  return task;
}
