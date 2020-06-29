import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

import delivery1 from "../../../assets/images/menubar/delivery1.png";
import calender1 from "../../../assets/images/menubar/calender1.png";
import setting1 from "../../../assets/images/menubar/setting1.png";
import news1 from "../../../assets/images/menubar/news1.png";
import timo1 from "../../../assets/images/menubar/timo1.png";
import home from "../../../assets/images/menubar/home.png";

import DropDownButton from "../MenuBackdrop/DropDownButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">Delivery Portal</a>
      </div>

      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">
              <div className="logoimage">
                <img src={delivery1} alt="delivery1" className="imageb" />
                Delevery Portal
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="logoimage">
                <img src={news1} alt="news" className="imagec" />
                News
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="logoimage">
                <img src={calender1} alt="calender" className="imaged" />
                Calander
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="logoimage">
                <img src={setting1} alt="setting" className="imagee" />
                Setting
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <div>
              <DropDownButton click={props.addClickHandler} />
            </div>
          </li>
        </ul>
      </div>
      <div className="toolbar_navigation-items2">
        <ul>
          <li>
            <a href="/">
              <div className="logoimage">
                <img src={home} alt="home" className="imagef" />
              </div>
            </a>
          </li>
          <li>
            <a href="/">
              <img src={timo1} alt="timo1" className="imagea" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
