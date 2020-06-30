import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

import timo1 from "../../../assets/images/menubar/timo1.png";
import home from "../../../assets/images/menubar/home.png";

import DropDownButton from "../MenuBackdrop/DropDownButton";

const toolbar = (props: any) => (
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
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a className="menu" href="/">
              Stream
            </a>
          </li>
          <li>
            <a className="menu" href="/">
              Phases
            </a>
          </li>
          <li>
            <a className="menu" href="/">
              Users
            </a>
          </li>
        </ul>
      </div>
      <div className="spacer" />

      <div className="toolbar_navigation-items2">
        <ul>
          <li>
            <img src={home} alt="home icon" className="home_icon" />
          </li>
          <li>
            <img src={timo1} alt="profile image" className="profile_image" />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
