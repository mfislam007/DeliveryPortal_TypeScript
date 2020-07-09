import { fetchDocument, createDocument } from "tripledoc";

export async function addProject(projectName: string, customerName: string, managerName: string) {
  const saveLocation = `https://ekseli.dev.inrupt.net/private/dp2/cases/${projectName}/project.ttl`;
  // BUG (Niko) [A check needs to be added to see if the saveLocation already exists, and give an error if it does, so previous data doesn't get overwritten.]
  const newDocument = await createDocument(saveLocation);
  await newDocument.save();

  const profileDoc = await fetchDocument(saveLocation);
  const profile = profileDoc.getSubject(saveLocation);
  profile.addString("https://schema.org/Project#name", projectName);
  profile.addString("https://schema.org/Organization#name", customerName);
  profile.addString("https://schema.org/Person#name", managerName);
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
  profile.setString("https://schema.org/Project#name", projectName);
  profile.setString("https://schema.org/Organization#name", customerName);
  profile.setString("https://schema.org/Person#name", managerName);
  await profileDoc.save();
}
