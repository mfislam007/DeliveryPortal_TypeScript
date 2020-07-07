import React from "react";
import Modal from "react-modal";

import AddProject from "./AddProject/AddProject";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <AddProject />
    </div>
  );
};

export default App;
