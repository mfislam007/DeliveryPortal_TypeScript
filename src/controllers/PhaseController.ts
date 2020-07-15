import { fetchDocument } from "tripledoc";

/** Updates given phase start and end dates */
export async function updatePhaseDates(webId: string, start: Date, end: Date) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  console.log("PhaseCOntroller: " + webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.setDateTime("https://schema.org/startTime", start);
  profile.setDateTime("https://schema.org/endTime", end);
  const result = await profileDoc.save();
}

/** Adds given phase start and end dates */
export async function addPhaseDates(webId: string, start: Date, end: Date) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.addDateTime("https://schema.org/startTime", start);
  profile.addDateTime("https://schema.org/endTime", end);
  const result = await profileDoc.save();
}

/** Removes given phase start and end dates */
export async function removePhaseDates(webId: string, start: Date, end: Date) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  profile.removeDateTime("https://schema.org/startTime", start);
  profile.removeDateTime("https://schema.org/endTime", end);
  const result = await profileDoc.save();
}

/** Returns the asked value for a property */
export async function getPhaseDate(webId: string, property: string) {
  const profileDoc = await fetchDocument(webId + "/action.ttl");
  const profile = profileDoc.getSubject(webId);
  return profile.getDateTime(property);
}
