import React, { useEffect } from "react";
import { fetchDocument, createDocument } from "tripledoc";

interface Props {
  project: {
    "https://schema.org/Project#name": string;
    "https://schema.org/Organization#name": string;
    "https://schema.org/Person#name": string;
  };
}

const ProjectContainer: React.FC<Props> = (props): JSX.Element => {
  const saveLocation = `https://ekseli.dev.inrupt.net/private/dp2/cases/${props.project["https://schema.org/Project#name"]}/project.ttl`;

  async function addProject(saveLocation: string) {
    // BUG (Niko) [A check needs to be added to see if the saveLocation already exists, and give an error if it does, so previous data doesn't get overwritten.]
    const newDocument = await createDocument(saveLocation);
    await newDocument.save();

    const profileDoc = await fetchDocument(saveLocation);
    const profile = profileDoc.getSubject(saveLocation);
    profile.addString(
      "https://schema.org/Project#name",
      props.project["https://schema.org/Project#name"]
    );
    profile.addString(
      "https://schema.org/Organization#name",
      props.project["https://schema.org/Organization#name"]
    );
    profile.addString(
      "https://schema.org/Person#name",
      props.project["https://schema.org/Person#name"]
    );
    await profileDoc.save();
  }

  useEffect(() => {
    (async () => {
      await addProject(saveLocation);
    })();
  }, []);

  return <div></div>;
};

export default ProjectContainer;
