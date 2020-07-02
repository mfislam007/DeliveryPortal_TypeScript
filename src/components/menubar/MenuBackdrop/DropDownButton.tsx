import React from "react";

import "./DropDownButton.css";

import plusIcon from "../../../assets/images/menubar/plus-icon.png";
import plusIconClicked from "../../../assets/images/menubar/plus-icon-clicked.png";

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};

const DropDownButton: React.FC<Props> = (props): JSX.Element => (
  <div>
    <button className="plus-icon" onClick={props.onClick}>
      <img src={plusIcon} alt="plus" className="plus-icon" />
    </button>
  </div>
);

export default DropDownButton;
