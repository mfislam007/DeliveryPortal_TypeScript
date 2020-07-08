import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import optionsIcon from "../../assets/images/commonicons/options-icon.png";

type Props = {
  userImage: string;
  eventString: string;
  date?: string | Date;
  optionalImage?: string;
};

const StreamEvent: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="streamEventElement">
      <AccountCircleIcon fontSize="large" />
      <div className="streamEventData">
        <div>{props.eventString}</div>
        {props.date !== undefined && <div>{props.date}</div>}
        {props.optionalImage !== undefined && <img src={props.optionalImage} alt="optional" />}
      </div>
      <img src={optionsIcon} alt="options" className="options"></img>
    </div>
  );
};

export default StreamEvent;
