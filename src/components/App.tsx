import React from "react";
import { getPhaseDate } from "../controllers/ProjectController/PhaseController";
import "./App.scss";

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
