import React from "react";
import Modal from "react-modal";

import AddProject from "./Modal/AddProject";

Modal.setAppElement("#root");

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <AddProject />
    </div>
  );
};

export default App;
