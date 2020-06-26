import React, { useState } from "react";
import StreamUpcoming from "./StreamUpcoming";
import StreamEvent from "./StreamEvent";
import portrait1 from "../../assets/images/projectstream/image1.png";
import portrait2 from "../../assets/images/projectstream/image13.png";
import optionalImg1 from "../../assets/images/projectstream/image11.png";
import optionalImg2 from "../../assets/images/projectstream/image12.png";
import "./StreamElement.css";

type tprops = {
  id?: number | string;
};

const StreamElement: React.FC<tprops> = (props: tprops): JSX.Element => {
  const [id, setId] = useState<number | string>(1);
  return (
    <div id={id + ""} className="projectEventStreamContainer">
      <StreamUpcoming />
      <div className="projectEventStreamMain">
        <StreamEvent userImage={portrait1} eventString="Share something with ABB..." />
        <StreamEvent
          userImage={portrait1}
          eventString="Esko updated checklist."
          date="25.5.2020 15:35"
          optionalImage={optionalImg1}
        />
        <StreamEvent
          userImage={portrait2}
          eventString="Timo added a new task."
          date="22.5.2020 15:15"
          optionalImage={optionalImg2}
        />
      </div>
    </div>
  );
};

export default StreamElement;
