import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getPhaseDate } from "./pages/deliveryphase/project/PhaseController";
import "./App.scss";
import HomePageSwitch from "./navigation/HomePageSwitch";
import MenuBar from "./menubar/MenuBar";
import EditPhase from "./pages/deliveryphase/project/EditPhase";

const App: React.FC = (): JSX.Element => {
  const [start, setStart] = React.useState<Date>(new Date());
  React.useEffect(() => {
    getPhaseDate(
      "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation",
      "https://schema.org/endTime"
    ).then(result => {
      setStart(result);
    });
  }, []);
  return <div className="App">Hello{start.toString()}</div>;
};

export default App;
