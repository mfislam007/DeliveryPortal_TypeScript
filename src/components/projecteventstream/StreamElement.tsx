import React, { useState } from "react";

import "./StreamElement.css";
import portrait1 from "../../assets/images/projectstream/esko-user.png";
import portrait2 from "../../assets/images/projectstream/timo-user.png";
import optionalImg1 from "../../assets/images/projectstream/prima-building1.png";
import optionalImg2 from "../../assets/images/projectstream/prima-building2.png";
import StreamUpcoming from "./StreamUpcoming";
import StreamEvent from "./StreamEvent";

type Props = {
  id?: number | string;
};

const StreamElement: React.FC<Props> = (props): JSX.Element => {
  const [id, setId] = useState(1 as number | string);
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
