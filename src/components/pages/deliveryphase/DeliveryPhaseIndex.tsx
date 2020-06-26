import React from "react";
import { useRouteMatch } from "react-router-dom";
import ProjectCard from "../../list-items/ProjectCard";
import "./DeliveryPhaseIndex.css";

const DeliveryPhaseIndex: React.FC = (): JSX.Element => {
  return (
    <div>
      <h3>Delivery Portals</h3>
      <div className="deliveryPortalProjectsContainer">
        <ProjectCard
          id={1}
          title="Audi's DP"
          owner="Esko Petäjä"
          tags={[
            { id: 1, name: "SGe" },
            { id: 2, name: "Car Industry" },
          ]}
        />
        <ProjectCard
          id={2}
          title="ABB's DP"
          owner="Esko Petäjä"
          tags={[
            { id: 1, name: "SGe" },
            { id: 2, name: "Car Industry" },
          ]}
        />
      </div>
    </div>
  );
};

export default DeliveryPhaseIndex;
