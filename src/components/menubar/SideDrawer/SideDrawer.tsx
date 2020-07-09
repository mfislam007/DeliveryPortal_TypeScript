import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.scss";
type Props = {
  show: boolean;
};
const SideDrawer: React.FC<Props> = (props): JSX.Element => {
  // BUG (Hindia) [1. when the links are clicked the drawer doesnt shut, 2. when other places are clicked the drawer doesn't shut]
  return (
    <nav className={props.show ? "side-drawer open" : "side-drawer"}>
      <ul>
        <li>
          <Link to="/deliveryportal">Delivery portals</Link>
        </li>

        <li>
          <Link to="/">Settings</Link>
        </li>
        <li>
          <Link to="/">Join Delivery portal</Link>
        </li>

        <li>
          <Link to="/">Add Delivery portal</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
