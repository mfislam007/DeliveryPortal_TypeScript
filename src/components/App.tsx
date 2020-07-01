import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./menubar/MenuBar";

const App: React.FC = (): JSX.Element => {
  return (
    <div>
      <Router>
        <MenuBar />
      </Router>
    </div>
  );
};

export default App;
