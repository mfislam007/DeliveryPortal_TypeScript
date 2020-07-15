import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreVertIcon from "@material-ui/icons/MoreVert";

type Props = {
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
        {props.date !== undefined && (
          <div>{typeof props.date === "string" ? props.date : props.date.toLocaleString()}</div>
        )}
        {props.optionalImage !== undefined && <img src={props.optionalImage} alt="optional" />}
      </div>
      <MoreVertIcon />
    </div>
  );
};

export default StreamEvent;
