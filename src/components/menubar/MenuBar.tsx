import React, { useState } from "react";

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";

const MenuBar: React.FC = (): JSX.Element => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  return (
    <div>
      <Toolbar onClick={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
    </div>
  );
};

export default MenuBar;
