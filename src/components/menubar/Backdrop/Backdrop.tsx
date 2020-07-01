import React from "react";

import "./Backdrop.css";

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};
const Backdrop: React.FC<Props> = (props): JSX.Element => (
  <div className="backdrop" onClick={props.onClick} />
);

export default Backdrop;
