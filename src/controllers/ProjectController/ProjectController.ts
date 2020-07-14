import { fetchDocument, createDocument } from "tripledoc";
import "regenerator-runtime/runtime";

import data from "../../../settings.json";

export async function addProject(projectName: string, customerName: string, managerName: string) {
  const saveLocation = `https://ekseli.dev.inrupt.net/private/dp2/cases/${projectName}/project.ttl`;
  const testLocation = doesFileExist(saveLocation);

  if (testLocation === 404) {
    const newDocument = createDocument(saveLocation);
    await newDocument.save();
    let profileDoc = await fetchDocument(data.solid.locations.casesFile);
    let profile = profileDoc.getSubject(data.solid.locations.casesFile);
    profile.addString(data.solid.write.projectName, projectName);
    await profileDoc.save();

    profileDoc = await fetchDocument(saveLocation);
    profile = profileDoc.getSubject(saveLocation);
    profile.addString(data.solid.write.projectName, projectName);
    profile.addString(data.solid.write.customerName, customerName);
    profile.addString(data.solid.write.managerName, managerName);
    await profileDoc.save();
  }
}

function doesFileExist(urlToFile: string) {
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", urlToFile, false);
  xhr.send();
  return xhr.status;
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
