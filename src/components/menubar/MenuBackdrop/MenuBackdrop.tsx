import React from "react";

import "./MenuBackdrop.css";

const menuBackdrop = props => (
  <div className="menuBackdrop" onMouseOut={props.click} />
);

export default menuBackdrop;
