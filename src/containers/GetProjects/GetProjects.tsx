import React, { useState, useEffect } from "react";
import { fetchDocument } from "tripledoc";
import auth from "solid-auth-client";

import DeliveryPhaseIndex from "../../components/pages/deliveryphase/DeliveryPhaseIndex";

const GetProjects: React.FC = (): JSX.Element => {
  const [names, setNames] = useState([] as string[]);
  const [pod, setPod] = useState<string>();
  const [url, setUrl] = useState<string>(
    "https://timojkankaanpaa.dev.inrupt.net/private/dp/cases/cases.ttl"
  );

  React.useEffect(() => {
    getWebId().then(result => {
      if (result != null) {
        result = result.substring(0, result.indexOf("/profile"));
        //setUrl(result + "/private/dp/cases/cases.ttl");
        console.log("URL:" + url);
        setPod(result);
      } else {
        console.log("webID null using Timo's POD");
        setUrl("https://timojkankaanpaa.dev.inrupt.net/private/dp/cases/cases.ttl");
      }
    });
  }, []);

  async function getWebId() {
    /* 1. Check if we've already got the user's WebID and access to their Pod: */
    let session = await auth.currentSession();
    if (session) {
      return session.webId;
    }
  }

  async function getProjectNames(webId: string) {
    const profileDoc = await fetchDocument(webId);
    const profile = profileDoc.getSubject(webId);
    setNames(profile.getAllStrings("https://schema.org/Project#name"));
    console.log(JSON.stringify(names));
  }

  useEffect(() => {
    (async () => {
      await getProjectNames(url);
    })();
  }, []);

  return (
    <div>
      <DeliveryPhaseIndex projectNames={names} />
    </div>
  );
};
export default GetProjects;
