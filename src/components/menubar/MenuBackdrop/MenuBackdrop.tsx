import React from "react";

import "./MenuBackdrop.css";

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};
const MenuBackDrop: React.FC<Props> = (props: Props): JSX.Element => (
  <div className="menuBackdrop" onMouseOut={props.onClick} />
);

export default MenuBackDrop;
