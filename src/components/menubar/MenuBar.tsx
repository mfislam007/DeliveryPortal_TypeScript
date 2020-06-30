import React, { Component, useState, useEffect } from "react";

import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import DropDownbar from "./MenuBackdrop/DropDownbar";
import MenuBackdrop from "./MenuBackdrop/MenuBackdrop";

const MenuBar: React.FC = (): JSX.Element => {
  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  const addBackdropClickHandler = () => {
    setTopOpen(false);
  };

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [backdrop, setBackdrop] = useState<JSX.Element>(
    sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : <p />
  );
  const [dropdownBar, setDropdownBar] = useState<JSX.Element>(
    topOpen ? <DropDownbar /> : <p />
  );
  const [menuBackdrop, setMenuBackdrop] = useState<JSX.Element>(
    topOpen ? <MenuBackdrop click={addBackdropClickHandler} /> : <p />
  );

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const addDrawerButtonClickHandler = () => {
    setTopOpen(!topOpen);
  };

  return (
    <div style={{ height: "100%" }}>
      <Toolbar
        drawerClickHandler={drawerToggleClickHandler}
        addClickHandler={addDrawerButtonClickHandler}
      />
      <SideDrawer show={sideDrawerOpen} />

      {backdrop}
      {dropdownBar}
      {menuBackdrop}
      <main style={{ marginTop: "100px" }}>
        <p>here goes content</p>
      </main>
    </div>
  );
};

export default MenuBar;
