import React from "react";
import { Link } from "react-router-dom";

import "./SideDrawer.css";
type Props = {
  show: boolean;
};
const SideDrawer: React.FC<Props> = (props: Props): JSX.Element => {
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
