import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDocument } from "tripledoc";

import RenderPhases from "../../components/RenderPhases/RenderPhases";
import data from "../../../settings.json";

type Props = {
  getPhaseInfo: (phaseInfo: { label: string; color: string }) => void;
};

const GetProjects: React.FC<Props> = (props): JSX.Element => {
  const [phaseNames, setPhaseNames] = useState([] as string[]);
  const { id } = useParams();
  const webId = `https://ekseli.dev.inrupt.net/private/dp2/cases/${id}/project.ttl`;

  async function getPhaseData(webId: string) {
    let phaseNamesBuffer: string[] = [];
    const profileDoc = await fetchDocument(webId);
    const profile = profileDoc.getSubject(webId);
    phaseNamesBuffer = profile.getAllStrings(data.solid.write.phaseName);
    setPhaseNames(phaseNamesBuffer);
  }

  useEffect(() => {
    (async () => {
      await getPhaseData(webId);
    })();
  }, []);

  return (
    <div>
      <RenderPhases projectPhases={phaseNames} getPhaseInfo={props.getPhaseInfo} />
    </div>
  );
};

export default GetProjects;
