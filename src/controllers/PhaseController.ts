import { fetchDocument, createDocument } from "tripledoc";
import Phase from "../entities/Phase";
import data from "../../settings.json";

export async function createPhase(webId: string, phase: Phase) {
  const testLocation = doesFileExist(webId + phase.name + "/action.ttl");
  if (testLocation === 404) {
    const newDocument = createDocument(webId + phase.name + "/action.ttl");
    await newDocument.save();
    let profileDoc = await fetchDocument(webId + phase.name + "/action.ttl");
    let profile = profileDoc.getSubject(webId);
    profile.addString(data.solid.write.phaseName, phase.name);
    profile.addDateTime(data.solid.write.startTime, phase.startTime);
    profile.addDateTime(data.solid.write.endTime, phase.endTime);
    await profileDoc.save();
    profileDoc = await fetchDocument(webId + "/project.ttl");
    profile = profileDoc.getSubject(webId + "/project.ttl");
    profile.addString(data.solid.write.phaseName, phase.name);
    await profileDoc.save();
  }
}
export async function updatePhase(webId: string, newPhase: Phase, oldPhase: Phase) {
  // BUG (Niko) [The phase folder isn't renamed, so future reads of phase data will fail]
  let profileDoc = await fetchDocument(webId + oldPhase.name + "/action.ttl");
  let profile = profileDoc.getSubject(webId);
  profile.addString(data.solid.write.phaseName, newPhase.name);
  profile.addDateTime(data.solid.write.startTime, newPhase.startTime);
  profile.addDateTime(data.solid.write.endTime, newPhase.endTime);
  await profileDoc.save();
  profileDoc = await fetchDocument(webId + "/project.ttl");
  profile = profileDoc.getSubject(webId + "/project.ttl");
  profile.removeString(data.solid.write.phaseName, oldPhase.name);
  profile.addString(data.solid.write.phaseName, newPhase.name);
  await profileDoc.save();
}
/** Deletes given taskname from given phase */
export async function deletePhase(webId: string, phaseName: string) {
  // BUG (Niko) [This only deletes the reference to the task inside the phases action.ttl file, actual task folder remains]
  const profileDoc = await fetchDocument(webId + "/project.ttl");
  const profile = profileDoc.getSubject(webId + "/project.ttl");
  profile.removeString(data.solid.write.phaseName, phaseName);
  await profileDoc.save();
}
/** Returns phase names of a project in a string array */
export async function getPhaseNames(webId: string) {
  const profileDoc = await fetchDocument(webId + "/project.ttl");
  const profile = profileDoc.getSubject(webId + "/project.ttl");
  return profile.getAllStrings(data.solid.write.phaseName);
}
/** returns an array of all phase objects in a project */
export async function getPhasesForProject(webId: string) {
  const phaseNames = await getPhaseNames(webId);
  let phases: Phase[] = new Array<Phase>(phaseNames.length);
  let phaseBuffer: Phase;
  for (let i = 0; i < phaseNames.length; i++) {
    phaseBuffer = await getPhase(`${webId}/${phaseNames[i]}`);
    phases[i] = phaseBuffer;
  }
  return phases;
}
/** returns data of a phase in an object */
export async function getPhase(webId: string) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  let phase = new Phase();
  phase.name = profile.getString(data.solid.write.phaseName);
  phase.startTime = profile.getDateTime(data.solid.write.startTime);
  phase.endTime = profile.getDateTime(data.solid.write.endTime);
  return phase;
}
function doesFileExist(urlToFile: string) {
  console.log(urlToFile);
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", urlToFile, false);
  xhr.send();
  return xhr.status;
}
