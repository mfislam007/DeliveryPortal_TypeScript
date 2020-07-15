import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MenuBarSwitch from "./navigation/MenuBarSwitch";
import HomePageSwitch from "./navigation/HomePageSwitch";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <MenuBarSwitch />
        <HomePageSwitch />
      </Router>
    </div>
  );
};

export default App;
