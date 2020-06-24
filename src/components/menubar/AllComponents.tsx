import React, { Component } from "react";

import Toolbar from "./menubar/Toolbar/Toolbar";
import SideDrawer from "./menubar/SideDrawer/SideDrawer";
import Backdrop from "./menubar/Backdrop/Backdrop";
import DropDownbar from "./menubar/MenuBackdrop/DropDownbar";
import MenuBackdrop from "./menubar/MenuBackdrop";

class AllComponents extends Component {
  state = {
    sideDrawerOpen: false,
    topOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  addDrawerButtonClickHandler = () => {
    this.setState(prevState => {
      return { topOpen: !prevState.topOpen };
    });
  };

  addBackdropClickHandler = () => {
    this.setState({ topOpen: false });
  };

  render() {
    let backdrop;
    let dropDownbar;
    let menuBackdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.state.topOpen) {
      dropDownbar = <DropDownbar />;
      menuBackdrop = <MenuBackdrop click={this.addBackdropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          addClickHandler={this.addDrawerButtonClickHandler}
        />
        <SideDrawer show={this.state.sideDrawerOpen} />

        {backdrop}
        {dropDownbar}
        {menuBackdrop}
        <main style={{ marginTop: "64px" }}>
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default AllComponents;
