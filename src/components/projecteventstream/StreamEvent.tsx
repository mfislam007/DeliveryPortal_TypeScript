import React from "react";
import optionsIcon from "../../assets/images/commonicons/options-icon.png";

type tprops = {
  userImage: string;
  eventString: string;
  date?: string | Date;
  optionalImage?: string;
};

const StreamEvent: React.FC<tprops> = (props: tprops): JSX.Element => {
  return (
    <div className="streamEventElement">
      <img src={props.userImage} alt=""></img>
      <div className="streamEventData">
        <div>{props.eventString}</div>
        {props.date !== undefined && <div>{props.date}</div>}
        {props.optionalImage !== undefined && <img src={props.optionalImage} alt="" />}
      </div>
      <img src={optionsIcon} alt="" className="options"></img>
    </div>
  );
};

export default StreamEvent;
