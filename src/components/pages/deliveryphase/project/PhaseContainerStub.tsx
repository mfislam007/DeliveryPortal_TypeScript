import React, { useEffect } from "react";
import { fetchDocument } from "tripledoc";
interface Props {
  identifier: string; //webid having the foolder path to phase to be updated
  startTime: Date;
  endTime: Date;
}
const PhaseContainerStub: React.FC<Props> = (props): JSX.Element => {
  useEffect(() => {
    addPhaseDates(props.identifier, props.startTime, props.endTime);
  }, []);

  async function addPhaseDates(webId: string, start: Date, end: Date) {
    const profileDoc = await fetchDocument(webId + "/action.ttl");
    const profile = profileDoc.getSubject(webId);
    profile.setDateTime("https://schema.org/startTime", start);
    profile.setDateTime("https://schema.org/endTime", end);
    //https://vincenttunru.gitlab.io/tripledoc/docs/cheatsheet#tripledoc-3 document has error should be like:
    await profileDoc.save();
  }

  return <div>PhaseContainerStub</div>;
};

export default PhaseContainerStub;
