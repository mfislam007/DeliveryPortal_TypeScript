import React from "react";
import calenderIcon from "../../assets/images/commonicons/calender-icon.png";
import "./StreamElement.css";

const StreamUpcoming: React.FC = (): JSX.Element => {
  return (
    <div className="projectStreamEventUpcomingMain">
      <h3>Upcoming</h3>
      <p>No Tasks due soon! Check your calender for more.</p>
      <img src={calenderIcon} alt="calender"></img>
    </div>
  );
};

export default StreamUpcoming;
