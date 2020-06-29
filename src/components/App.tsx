import React from "react";
import { LoggedIn, LoggedOut, LogoutButton } from "@solid/react";
import { ProviderLogin } from "@inrupt/solid-react-components";
import ImageList from "../containers/ImageList/ImageList";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <LoggedOut>
        <ProviderLogin callbackUri={`${window.location.origin}/`} />
      </LoggedOut>
      <LoggedIn>
        <ImageList dataSource="https://nikosiltaloppi.solid.community/private/pictures/" />
        <LogoutButton />
      </LoggedIn>
    </div>
  );
};

export default App;
