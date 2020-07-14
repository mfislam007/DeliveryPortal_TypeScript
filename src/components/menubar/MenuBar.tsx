import React, { useState } from "react";

import Toolbar from "./Toolbar/Toolbar";

const MenuBar: React.FC = (): JSX.Element => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  return (
    <div>
      <Toolbar />
    </div>
  );
};

export default MenuBar;
