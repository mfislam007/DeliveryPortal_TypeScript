import * as React from "react";
import { ProviderLogin } from "@inrupt/solid-react-components";
import { LoggedIn, LoggedOut, LogoutButton, List, Value } from "@solid/react";
import ProjectCard from "../components/ProjectCard";

const ProjectList: React.FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <LoggedOut>
        <div className="loggedout">
          <h2>Please login:</h2>
          <ProviderLogin callbackUri={`${window.location.origin}/`} />
        </div>
      </LoggedOut>
      <LoggedIn>
        <span>Hello projects</span>
        {/* @TODO move data from Nikos POD */}
        <ProjectCard
          id={1}
          title={
            <Value
              src={`
            ["https://nikosiltaloppi.inrupt.net/profile/card#me"].blog
              .schema_blogPost.label`}
            />
          }
          owner={
            <Value
              src={`["https://nikosiltaloppi.inrupt.net/profile/card#me"].vcard$fn`}
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
