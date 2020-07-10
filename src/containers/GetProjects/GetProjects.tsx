import React, { useState, useEffect } from "react";
import { fetchDocument } from "tripledoc";
import auth from "solid-auth-client";

import DeliveryPhaseIndex from "../../components/pages/deliveryphase/DeliveryPhaseIndex";

const GetProjects: React.FC = (): JSX.Element => {
  const [names, setNames] = useState([] as string[]);
  const [webID, setWebID] = useState<String>();
  const webId = `https://timojkankaanpaa.dev.inrupt.net/private/dp/cases/cases.ttl`;

  React.useEffect(() => {
    getWebId().then(result => {
      setWebID(result);
    });
  }, [webID]);

  async function getWebId() {
    /* 1. Check if we've already got the user's WebID and access to their Pod: */
    let session = await auth.currentSession();
    if (session) {
      return session.webId;
    }
  }

  console.log("Web id is :" + webID);

  async function getProjectNames(webId: string) {
    const profileDoc = await fetchDocument(webId);
    const profile = profileDoc.getSubject(webId);
    setNames(profile.getAllStrings("https://schema.org/Project#name"));
    console.log(JSON.stringify(names));
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
