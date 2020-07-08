import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import HomePageSwitch from "./navigation/HomePageSwitch";
import MenuBar from "./menubar/MenuBar";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Router>
        <HomePageSwitch />
      </Router>
    </div>
  );
};

export default App;
