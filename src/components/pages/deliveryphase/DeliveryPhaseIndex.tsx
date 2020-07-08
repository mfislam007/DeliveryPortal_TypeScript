import React from "react";

import "./DeliveryPhaseIndex.scss";
import ProjectCard from "../../list-items/ProjectCard";
import MenuBar from "../../menubar/MenuBar";

interface Props {
  projectNames: string[];
}

const DeliveryPhaseIndex: React.FC<Props> = props => {
  /**
   * loop here names array and create ProjectCards for them
   */
  const nameCards = props.projectNames.map((name, index) => (
    <ProjectCard
      key={index}
      id={name}
      title={name}
      owner="John Smith"
      tags={[
        { id: 1, name: "SGe" },
        { id: 2, name: "Car Industry" },
      ]}
    ></ProjectCard>
  ));

  return (
    <div>
      <MenuBar />
      <div className="deliveryPortalProjectsContainer">{nameCards}</div>
    </div>
  );
};
export default DeliveryPhaseIndex;
