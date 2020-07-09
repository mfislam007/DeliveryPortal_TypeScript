import React from "react";
import "./App.scss";
import EditPhase from "./pages/deliveryphase/project/EditPhase";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <EditPhase
        phase="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation"
        start={null}
        end={null}
        open={true}
      />
    </div>
  );
};

export default App;
