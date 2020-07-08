import React from "react";
import EditPhase from "../components/pages/deliveryphase/project/EditPhase";
const App: React.FC = (): JSX.Element => {
  const phase = "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Preinstallation";
  const s = new Date(2020, 5, 1);
  const e = new Date(2020, 6, 15);
  return (
    <div className="App">
      <EditPhase phase={phase} start={s} end={e} />
    </div>
  );
};

export default App;
