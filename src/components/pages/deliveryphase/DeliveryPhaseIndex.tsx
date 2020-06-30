import React, { useState, useEffect } from "react";
import ProjectCard from "../../list-items/ProjectCard";
import "./DeliveryPhaseIndex.css";
import "regenerator-runtime/runtime";
import { fetchDocument } from "tripledoc";

const DeliveryPhaseIndex: React.FC = (): JSX.Element => {
  const [names, setNames] = useState<string[]>([]);
  /**
   * Read project names from POD
   */
  useEffect(() => {
    getNames("https://ekseli.dev.inrupt.net/private/dp/cases/Project2/project.ttl");
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
  const nameCards = <ProjectCard id={2} title="Another hard coded" owner="Esko Petäjä" />;

  return (
    <div>
      <h3>Delivery Portals</h3>
      <div className="deliveryPortalProjectsContainer">
        <ProjectCard
          id={1}
          title="Hard coded"
          owner="Esko Petäjä"
          tags={[
            { id: 1, name: "SGe" },
            { id: 2, name: "Car Industry" },
          ]}
        />
        {nameCards}
      </div>
    </div>
  );
};

export default DeliveryPhaseIndex;
