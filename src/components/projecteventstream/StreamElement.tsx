import React, { useState } from "react";

import "./StreamElement.scss";
import optionalImg1 from "../../assets/images/projectstream/prima-building-1.png";
import optionalImg2 from "../../assets/images/projectstream/prima-building-2.png";
import StreamEvent from "./StreamEvent";

type Props = {
  id?: number | string;
};

const StreamElement: React.FC<Props> = (props): JSX.Element => {
  const [id, setId] = useState(1);

  //  WARNING  (Roman Bezusiak) [ `id={id.toString()}` is quite ambiguous id naming, do we need it here? ]
  return (
    <div id={id.toString()} className="projectEventStreamContainer">
      <div className="projectEventStreamMain">
        <StreamEvent eventString="Share something with ABB..." />
        <StreamEvent
          eventString="John Smith updated checklist."
          date="25.5.2020 15:35"
          optionalImage={optionalImg1}
        />
        <StreamEvent
          eventString="Jane Doe added a new task."
          date="22.5.2020 15:15"
          optionalImage={optionalImg2}
        />
      </div>
    </div>
  );
};

export default StreamElement;
