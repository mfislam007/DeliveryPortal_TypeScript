import React from "react";

import "./DropDownButton.css";

const dropDownButton = (props: any) => (
  <div>
    <button className="addbar" onClick={props.click}>
      +
    </button>
  </div>
);
export default dropDownButton;
