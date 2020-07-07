import React from "react";

import "./DrawerToggleButton.scss";
type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};
const DrawerToggleButton = (props: Props) => (
  <button className="toggle-button" onClick={props.onClick}>
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
    <div className="toggle-button-line" />
  </button>
);

export default DrawerToggleButton;
