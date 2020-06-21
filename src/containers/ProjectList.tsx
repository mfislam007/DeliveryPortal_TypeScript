import * as React from "react";
import { ProviderLogin } from "@inrupt/solid-react-components";
import { LoggedIn, LoggedOut, LogoutButton, List, Value } from "@solid/react";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const ProjectList: React.FC<Props> = (props): JSX.Element => {
  //logs in to POD (Niko need to add your webid), reads two projects (we use blob now - later project ontology)
  return (
    <div>
      <LoggedOut>
        <div className="loggedout">
          <h2>Please login:</h2>
          <ProviderLogin callbackUri={`${window.location.origin}/`} />
        </div>
      </LoggedOut>
      <LoggedIn>
        <span>
          Project found in POD of https://ekseli.inrupt.net/profile/card#me
        </span>
        <ProjectCard
          id={1}
          title={
            <Value
              src={`["https://ekseli.inrupt.net/profile/card#me"]["https://schema.org/Project#name"]`}
            />
          }
          owner={
            <Value
              src={`["https://ekseli.inrupt.net/profile/card#me"]["https://schema.org/Project#legalName"]`}
            />
          }
          tags={[{ id: 1, tag: "SGe" }]}
        />
        {/*<List
          src={`
                  ["https://nikosiltaloppi.inrupt.net/profile/card#me"].blog
                    .schema_blogPost.label`}
        />*/}
      </LoggedIn>
    </div>
  );
};

function util(s: string): string {
  return s + "!";
}

export default ProjectList;
