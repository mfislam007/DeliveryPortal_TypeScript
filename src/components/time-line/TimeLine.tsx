import React, { useState, useEffect } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";

import { getPhasesForProject } from "../../controllers/PhaseController";
import Phase from "../../entities/Phase";
import data from "../../../settings.json";

import "../pages/deliveryphase/project/ProjectPage.scss";

const ContentTimeline: React.FC = (): JSX.Element => {
  const [phases, setPhases] = useState<Phase[]>([]);

  useEffect(() => {
    (async () => {
      const phases = await getPhasesForProject(data.solid.locations.projectABC);
      setPhases(phases);
    })();
  }, []);

  const listPhases = phases.map((phase, index) => (
    <TimelineItem key={index} classes={{ root: "time-line" }}>
      <TimelineSeparator>
        {index == 0 ? <TimelineDot color="primary" /> : <TimelineDot />}
        {index == phases.length - 1 ? <div /> : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography>{phase.name}</Typography>
      </TimelineContent>
      <TimelineContent>
        <Typography>{phase.startTime.toDateString()}</Typography>
      </TimelineContent>
    </TimelineItem>
  ));

  return (
    <React.Fragment>
      <Timeline>{listPhases}</Timeline>
    </React.Fragment>
  );
};

export default ContentTimeline;
