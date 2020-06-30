import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";
import delivery1 from "../../../assets/images/menubar/news1.png";
import news1 from "../../../assets/images/menubar/news1.png";
import calender1 from "../../../assets/images/menubar/calender1.png";
import setting1 from "../../../assets/images/menubar/setting1.png";
import dp1 from "../../../assets/images/menubar/news1.png";

const sideDrawer = (props: any) => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link to="/deliveryportal">Delivery portals</Link>
        </li>
        <li>
          <a href="/">News</a>
        </li>
        <li>
          <a href="/">Calender</a>
        </li>

        <li>
          <a href="/">Setting</a>
        </li>
        <li>
          <a href="/">Join Delivery portal</a>
        </li>

        <li>
          <a href="/">Add Delivery portal</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
