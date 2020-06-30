import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

import timo1 from "../../../assets/images/menubar/timo1.png";
import home from "../../../assets/images/commonicons/home-icon.png";

import DropDownButton from "../MenuBackdrop/DropDownButton";
import { Route, useHistory } from "react-router";
import ToolbarProjectPageLinks from "./ToolbarProjectPageLinks";

const toolbar = (props: any) => {
  let history = useHistory();

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <a href="/">ABB's Delivery Portal</a>
        </div>
        <div>
          <button className="toolbar_project"> R&D Project </button>
        </div>
        <div className="spacer" />
        <Route path="/deliveryportal/projectid=:id" component={ToolbarProjectPageLinks}></Route>
        <div className="spacer" />

        <div className="toolbar_navigation-items2">
          <ul>
            <li>
              <img
                src={home}
                alt="home icon"
                className="home_icon"
                onClick={() => {
                  history.push("");
                }}
              />
            </li>
            <li>
              <img src={timo1} alt="profile image" className="profile_image" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
