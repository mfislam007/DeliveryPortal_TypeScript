import React from "react";

import "./DropDownBar.css";

const DropDownBar: React.FC = (): JSX.Element => (
  <nav className="dropdown">
    <ul>
      <li>
        <a href="/">Join Delivery portal</a>
      </li>
      <li>
        <a href="/">Add Delivery portal</a>
      </li>
    </ul>
  </nav>
);

export default DropDownBar;
