import React from "react";

import "./MenuBackdrop.scss";

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};

const MenuBackDrop: React.FC<Props> = (props): JSX.Element => (
  <div className="menuBackdrop" onMouseOut={props.onClick} />
);

export default MenuBackDrop;
