import React from "react";
import Timeline from "react-time-line";

import "./TimeLine.css";

const TimeLine: React.FC = (): JSX.Element => {
  const events = [
    { ts: "2020-05-10T12:22:46.587Z", text: "Preparation" },
    { ts: "2020-05-21T12:21:46.587Z", text: "Installation" },
    { ts: "2020-05-21T12:20:46.587Z", text: "Milestone #1" },
    { ts: "2020-07-30T12:22:46.587Z", text: "Commissioning" },
    { ts: "2020-07-30T12:21:46.587Z", text: "Check Point A" },
    { ts: "2020-08-16T12:20:46.587Z", text: "Training" },
    { ts: "2020-08-16T12:20:46.587Z", text: "Milestone #2" },
    { ts: "2020-09-16T12:20:46.587Z", text: "Check Point B" },
    { ts: "2020-09-16T12:20:46.587Z", text: "Production Ramp up" },
    { ts: "2020-10-16T12:20:46.587Z", text: "Production" },
  ];

  return (
    <div className="timeline">
      <Timeline items={events} />
    </div>
  );
};

export default TimeLine;
