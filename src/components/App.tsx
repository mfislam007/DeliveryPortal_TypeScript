import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MenuBarSwitch from "./Navigation/MenuBarSwitch";
import HomePageSwitch from "./Navigation/HomePageSwitch";

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
