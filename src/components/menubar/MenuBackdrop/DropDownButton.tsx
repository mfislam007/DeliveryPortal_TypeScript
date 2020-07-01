import React from "react";

import "./DropDownButton.css";

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};

const DropDownButton: React.FC<Props> = (props): JSX.Element => (
  <div>
    <button className="addbar" onClick={props.onClick}>
      +
    </button>
  </div>
);

export default DropDownButton;
