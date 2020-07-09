import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import HomePageSwitch from "./navigation/HomePageSwitch";
import MenuBar from "./menubar/MenuBar";
import EditPhase from "./pages/deliveryphase/project/EditPhase";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <EditPhase
        phase="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Preinstallation"
        start={new Date(2021, 7, 1, 9, 0, 0)}
        end={new Date(2021, 8, 15, 13, 0)}
        open={true}
      />
      {/*       
      <Router>
        <MenuBar />
        <HomePageSwitch />
      </Router>*/}
    </div>
  );
};

export default App;
