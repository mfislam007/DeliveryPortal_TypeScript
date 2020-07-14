import React, { useState, useEffect } from "react";
import { fetchDocument } from "tripledoc";

import DeliveryPhaseIndex from "../../components/pages/deliveryphase/DeliveryPhaseIndex";

const GetProjects: React.FC = (): JSX.Element => {
  const [names, setNames] = useState([] as string[]);
  const webId = `https://ekseli.dev.inrupt.net/private/dp2/cases/cases.ttl`;

  async function getProjectNames(webId: string) {
    const profileDoc = await fetchDocument(webId);
    const profile = profileDoc.getSubject(webId);

    setNames(profile.getAllStrings("https://schema.org/Project#name"));
  }

  useEffect(() => {
    (async () => {
      await getProjectNames(webId);
    })();
  }, []);

  return (
    <div>
      <DeliveryPhaseIndex projectNames={names} />
    </div>
  );
};
export default GetProjects;
