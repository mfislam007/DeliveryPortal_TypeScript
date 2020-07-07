import React, { useState } from "react";

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";

const MenuBar: React.FC = (): JSX.Element => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false as boolean);
  const [menuBackDropOpen, setmenuBackDropOpen] = useState(false as boolean);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  return (
    <div>
      <Toolbar onClick={drawerToggleClickHandler} show={menuBackDropOpen} />
      <SideDrawer show={sideDrawerOpen} />
    </div>
  );
};

export default MenuBar;
