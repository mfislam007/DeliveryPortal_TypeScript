import React from "react";

import ProjectCard from "../list-items/ProjectCard";

type Props = {
  projectNames: string[];
  managerNames: string[];
};

const RenderProjects: React.FC<Props> = props => {
  const nameCards = props.projectNames.map((name, index) => (
    <ProjectCard
      key={index}
      id={name}
      title={name}
      owner={props.managerNames[index]}
      tags={[
        { id: 1, name: "SGe" },
        { id: 2, name: "Car Industry" },
      ]}
    ></ProjectCard>
  ));

  return (
    <div>
      <div className="deliveryPortalProjectsContainer">{nameCards}</div>
    </div>
  );
};

export default RenderProjects;
