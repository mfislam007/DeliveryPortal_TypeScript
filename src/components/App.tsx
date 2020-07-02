import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import HomePageSwitch from "./navigation/HomePageSwitch";
import MenuBar from "./menubar/MenuBar";
import AddProject from "./Modal/AddProject";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <AddProject />
    </div>
  );
};

export default App;
