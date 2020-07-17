import { fetchDocument, createDocument } from "tripledoc";

import { doesFileExist } from "../util/controller";
import Phase from "../entities/Phase";
import data from "../../settings.json";

/** Updates given phase start and end dates */
export async function updatePhaseDates(webId: string, start: Date, end: Date): Promise<void> {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  console.log("PhaseCOntroller: " + webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.setDateTime("https://schema.org/startTime", start);
  profile.setDateTime("https://schema.org/endTime", end);
  await profileDoc.save();
}

/** Adds given phase start and end dates */
export async function addPhaseDates(webId: string, start: Date, end: Date): Promise<void> {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.addDateTime("https://schema.org/startTime", start);
  profile.addDateTime("https://schema.org/endTime", end);
  await profileDoc.save();
}

/** Removes given phase start and end dates */
export async function removePhaseDates(webId: string, start: Date, end: Date): Promise<void> {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.removeDateTime("https://schema.org/startTime", start);
  profile.removeDateTime("https://schema.org/endTime", end);
  await profileDoc.save();
}

/** Returns the asked value for a property */
export async function getPhaseDate(webId: string, property: string): Promise<Date> {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  return profile.getDateTime(property);
}

export async function createPhase(webId: string, phase: Phase): Promise<void> {
  if (!doesFileExist(webId + phase.name + "/action.ttl")) {
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

export async function updatePhase(webId: string, newPhase: Phase, oldPhase: Phase): Promise<void> {
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
export async function deletePhase(webId: string, phaseName: string): Promise<void> {
  // BUG (Niko) [This only deletes the reference to the task inside the phases action.ttl file, actual task folder remains]
  const profileDoc = await fetchDocument(webId + "/project.ttl");
  const profile = profileDoc.getSubject(webId + "/project.ttl");
  profile.removeString(data.solid.write.phaseName, phaseName);
  await profileDoc.save();
}

/** Returns phase names of a project in a string array */
export async function getPhaseNames(webId: string): Promise<string[]> {
  const profileDoc = await fetchDocument(webId + "/project.ttl");
  const profile = profileDoc.getSubject(webId + "/project.ttl");
  return profile.getAllStrings(data.solid.write.phaseName);
}

/** returns an array of all phase objects in a project */
export async function getPhasesForProject(webId: string): Promise<Phase[]> {
  const phaseNames = await getPhaseNames(webId);
  let phases: Phase[] = new Array<Phase>(phaseNames.length);
  for (let i = 0; i < phaseNames.length; i++) {
    phases[i] = await getPhase(`${webId}/${phaseNames[i]}`);
  }
  return phases;
}

/** returns data of a phase in an object */
export async function getPhase(webId: string): Promise<Phase> {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  return {
    name: profile.getString(data.solid.write.phaseName),
    startTime: profile.getDateTime(data.solid.write.startTime),
    endTime: profile.getDateTime(data.solid.write.endTime),
  } as Phase;
}
