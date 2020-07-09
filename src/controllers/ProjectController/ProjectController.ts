import { fetchDocument, createDocument } from "tripledoc";

import data from "../../../settings.json";

export async function addProject(projectName: string, customerName: string, managerName: string) {
  const saveLocation = `https://ekseli.dev.inrupt.net/private/dp2/cases/${projectName}/project.ttl`;

  // BUG (Niko) [A check needs to be added to see if the saveLocation already exists, and give an error if it does, so previous data doesn't get overwritten.]
  const newDocument = createDocument(saveLocation);
  await newDocument.save();

  let profileDoc = await fetchDocument(saveLocation);
  let profile = profileDoc.getSubject(saveLocation);
  profile.addString(data.solid.write.projectName, projectName);
  profile.addString(data.solid.write.customerName, customerName);
  profile.addString(data.solid.write.managerName, managerName);
  await profileDoc.save();

  profileDoc = await fetchDocument(data.solid.locations.casesFile);
  profile = profileDoc.getSubject(data.solid.locations.casesFile);
  profile.addString(data.solid.write.projectName, projectName);
  await profileDoc.save();
}

export async function updateProject(
  projectName: string,
  customerName: string,
  managerName: string
) {
  const saveLocation = `https://ekseli.dev.inrupt.net/private/dp2/cases/${projectName}/project.ttl`;
  const profileDoc = await fetchDocument(saveLocation);
  const profile = profileDoc.getSubject(saveLocation);
  profile.setString(data.solid.write.projectName, projectName);
  profile.setString(data.solid.write.customerName, customerName);
  profile.setString(data.solid.write.managerName, managerName);
  await profileDoc.save();
}
