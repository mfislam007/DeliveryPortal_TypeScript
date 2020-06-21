import * as React from "react";
import { ProviderLogin } from "@inrupt/solid-react-components";
import { LoggedIn, LoggedOut, LogoutButton, List } from "@solid/react";

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
        <List
          src={`
                  ["https://nikosiltaloppi.inrupt.net/profile/card#me"].blog
                    .schema_blogPost.label`}
        />
      </LoggedIn>
    </div>
  );
};

function util(s: string): string {
  return s + "!";
}

export default ProjectList;
