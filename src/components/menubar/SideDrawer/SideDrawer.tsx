import React from "react";

import "./SideDrawer.css";
import delivery1 from "../../assets/images/menubar/delivery1.jpg";
import news1 from "../../assets/images/menubar/news1.png";
import calender1 from "../../assets/images/menubar/calender1.png";
import setting1 from "../../assets/images/menubar/setting1.png";
import dp1 from "../../assets/images/menubar/dp1.png";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">
            <img src={delivery1} alt="delivery1" class="logo" />
            Delivery portals
          </a>
        </li>
        <li>
          <a href="/">
            <img src={news1} alt="news1" class="logo" />
            News
          </a>
        </li>
        <li>
          <a href="/">
            <img src={calender1} alt="calender1" class="logo" />
            Calender
          </a>
        </li>

        <li>
          <a href="/">
            <img src={setting1} alt="setting1" class="logo" />
            Setting
          </a>
        </li>
        <div className="spacer2"></div>
        <div className="addbar2">
          <li>
            <a href="/">
              <img src={dp1} alt="dp1" class="logo" /> Join Delivery portal
            </a>
          </li>

          <li>
            <a href="/">
              <img src={dp1} alt="dp1" class="logo" /> Add Delivery portal
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default sideDrawer;
