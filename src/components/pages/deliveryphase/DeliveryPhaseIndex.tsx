import React, { useState, useEffect } from "react";
import { fetchDocument } from "tripledoc";
import "regenerator-runtime/runtime";

import "./DeliveryPhaseIndex.css";
import ProjectCard from "../../list-items/ProjectCard";

const DeliveryPhaseIndex: React.FC = (): JSX.Element => {
  const [names, setNames] = useState<string[]>([]);

  /**
   * Read project names from POD
   */
  useEffect(() => {
    getNames("https://ekseli.dev.inrupt.net/private/dp2/cases/cases.ttl");
    async function getNames(webId: string) {
      const profileDoc = await fetchDocument(webId);
      const profile = profileDoc.getSubject(webId);
      console.log(JSON.stringify(profile.getAllStrings("http://schema.org/Project#name")));
      setNames(profile.getAllStrings("http://schema.org/Project#name"));
    }
  }, []);

  /**
   * loop here names array and create ProejctCards for them
   */
  const nameCards = names.map((name, index) => (
    <ProjectCard
      key={index}
      id={name}
      title={name}
      owner="Esko Petäjä"
      tags={[
        { id: 1, name: "SGe" },
        { id: 2, name: "Car Industry" },
      ]}
    ></ProjectCard>
  ));

  return (
    <div>
      <h3>Delivery Portals</h3>
      <div className="deliveryPortalProjectsContainer">{nameCards}</div>
    </div>
  );
};
export default DeliveryPhaseIndex;
