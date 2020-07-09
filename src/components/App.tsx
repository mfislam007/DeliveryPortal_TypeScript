import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import HomePageSwitch from "./navigation/HomePageSwitch";
import MenuBar from "./menubar/MenuBar";
import EditPhase from "./pages/deliveryphase/project/EditPhase";
import PhaseContainerStub from "./pages/deliveryphase/project/PhaseContainerStub";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <PhaseContainerStub
        identifier="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation"
        startTime={new Date(2020, 7, 1)}
        endTime={new Date(2020, 8, 15)}
      />
      ;
      <Router>
        <MenuBar />
        <HomePageSwitch />
      </Router>
    </div>
  );
};

export default App;
