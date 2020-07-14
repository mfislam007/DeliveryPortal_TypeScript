import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDocument } from "tripledoc";

import DeliveryPhaseIndex from "../../components/pages/deliveryphase/project/ProjectPhases";

const GetProjects: React.FC = (): JSX.Element => {
  const [names, setNames] = useState([] as string[]);
  const { id } = useParams();
  const webId = `https://ekseli.dev.inrupt.net/private/dp2/cases/${id}/project.ttl`;

  async function getPhaseNames(webId: string) {
    const profileDoc = await fetchDocument(webId);
    const profile = profileDoc.getSubject(webId);
    setNames(profile.getAllStrings("https://schema.org/Action#name"));
  }

  useEffect(() => {
    (async () => {
      await getPhaseNames(webId);
    })();
  }, []);

  return (
    <div>
      <DeliveryPhaseIndex projectPhases={names} />
    </div>
  );
};
export default GetProjects;
