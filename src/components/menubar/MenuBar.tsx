import React, { useState, useEffect } from "react";
import "./MenuBar.css";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";

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
