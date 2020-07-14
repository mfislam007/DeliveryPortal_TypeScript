import React from "react";

import "./DropDownButton.scss";
import plusIcon from "../../../assets/images/menubar/plus-icon.png";

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};

const DropDownButton: React.FC<Props> = (props): JSX.Element => (
  <button className="plus-icon" onClick={props.onClick}>
    <img src={plusIcon} alt="plus" className="plus-icon" />
  </button>
);

export default DropDownButton;
