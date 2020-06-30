import React from "react";

import "./MenuBackdrop.css";

const menuBackdrop = (props: any) => <div className="menuBackdrop" onMouseOut={props.click} />;

export default menuBackdrop;
