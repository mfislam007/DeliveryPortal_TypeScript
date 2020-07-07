import React from "react";

import "./StreamElement.scss";
import calendarIcon from "../../assets/images/commonicons/calender-icon.png";

const StreamUpcoming: React.FC = (): JSX.Element => {
  return (
    <div className="projectStreamEventUpcomingMain">
      <h3>Upcoming</h3>
      <p>No Tasks due soon! Check your calender for more.</p>
      <img src={calendarIcon} alt="calendar"></img>
    </div>
  );
};

export default StreamUpcoming;
