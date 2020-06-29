import React from "react";

import "./DropDownButton.css";

const dropDownButton = props => (
  <div>
    <button className="addbar" onMouseOver={props.click}>
      +
    </button>
  </div>
);
export default dropDownButton;
