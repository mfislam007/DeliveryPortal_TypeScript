import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDocument } from "tripledoc";

import "../DeliveryPhaseIndex.css";
import ProjectCard from "../../../list-items/ProjectCard";

const ProjectPhases: React.FC = (): JSX.Element => {
  const [names, setNames] = useState([] as string[]);
  const { id } = useParams();

  useEffect(() => {
    /** Should pass the webid and project name as argument. To list the phases user must have read access to POD */
    (async (webId: string) => {
      const profileDoc = await fetchDocument(webId);
      const profile = profileDoc.getSubject(webId);
      console.log(JSON.stringify(profile.getAllStrings("https://schema.org/Action#name")));
      setNames(profile.getAllStrings("https://schema.org/Action#name"));
    })(`https://ekseli.dev.inrupt.net/private/dp2/cases/${id}/project.ttl`);
  }, []);

  const nameCards = names.map((name, index) => (
    <ProjectCard
      id={index}
      key={index}
      title={name}
      owner="This is a phase but uses ProjectCards for visualization"
      tags={[
        { id: 1, name: "SGe" },
        { id: 2, name: "Car Industry" },
      ]}
    ></ProjectCard>
  ));

  return <div className="deliveryPortalProjectsContainer">{nameCards}</div>;
};

export default ProjectPhases;
