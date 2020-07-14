import React from "react";

import { PhaseColors } from "../../constants/WidgetColors";
import PhaseWidgetCard from "../list-items/PhaseWidgetCard";

type Props = {
  projectPhases: string[];
};

const RenderPhases: React.FC<Props> = (props): JSX.Element => {
  const PhaseCards = props.projectPhases.map((name, index) => (
    <PhaseWidgetCard
      key={index}
      label={name}
      timeFrame="May 10 - June 11"
      completion={{ tasksCompleted: 5, totalTasks: 5 }}
      phaseColor={PhaseColors[index]}
    />
  ));

  return <div className="project-phase-card-section">{PhaseCards}</div>;
};

export default RenderPhases;
