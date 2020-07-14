import React, { useState, useEffect } from "react";
import { fetchDocument } from "tripledoc";
import CircularProgress from "@material-ui/core/CircularProgress";

import data from "../../../settings.json";
import RenderProjects from "../../components/RenderProjects/RenderProjects";
import "./GetProjects.scss";

const GetProjects: React.FC = (): JSX.Element => {
  const [projectNames, setProjectNames] = useState([] as string[]);
  const [managerNames, setManagerNames] = useState([] as string[]);
  const [loading, setLoading] = useState(true);
  const webId = data.solid.locations.casesFile;

  async function getProjectData(webId: string) {
    let projectDataBuffer: string[] = [];
    let managerNamesBuffer: string[] = [];
    let profileDoc = await fetchDocument(webId);
    let profile = profileDoc.getSubject(webId);
    projectDataBuffer = profile.getAllStrings(data.solid.write.projectName);
    for (let i = 0; i < projectDataBuffer.length; i++) {
      profileDoc = await fetchDocument(
        "https://ekseli.dev.inrupt.net/private/dp2/cases/" + projectDataBuffer[i] + "/project.ttl"
      );
      profile = profileDoc.getSubject(
        "https://ekseli.dev.inrupt.net/private/dp2/cases/" + projectDataBuffer[i] + "/project.ttl"
      );
      managerNamesBuffer.push(profile.getString(data.solid.write.managerName));
    }
    setProjectNames(projectDataBuffer);
    setManagerNames(managerNamesBuffer);
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      await getProjectData(webId);
    })();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="progress-wrapper">
          <CircularProgress size="100" />
        </div>
      ) : (
        <RenderProjects projectNames={projectNames} managerNames={managerNames} />
      )}
    </div>
  );
};

export default GetProjects;
