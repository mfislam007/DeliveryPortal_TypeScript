import React from "react";
import EditPhase from "../components/pages/deliveryphase/project/EditPhase";
import MenuBar from "./menubar/MenuBar";
import HomePageSwitch from "./navigation/HomePageSwitch";
import { Router } from "react-router-dom";
const App: React.FC = (): JSX.Element => {
  const phase = "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Preinstallation";
  const s = new Date(2020, 5, 1);
  const e = new Date(2020, 6, 15);
  return (
    <div className="App">
      <Router>
        <MenuBar />
        <HomePageSwitch />
      </Router>
    </div>
  );
};

export default App;
