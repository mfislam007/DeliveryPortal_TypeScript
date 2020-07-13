import React from "react";

import "../DeliveryPhaseIndex.scss";
import { PhaseColors } from "../../../../constants/WidgetColors";
import ImageList from "../../../../containers/ImageList/ImageList";
import TimeLine from "../../../time-line/TimeLine";
import PhaseWidgetCard from "../../../list-items/PhaseWidgetCard";
import AddTask from "./AddTask";

interface Props {
  projectPhases: string[];
}

const ProjectPhases: React.FC<Props> = (props): JSX.Element => {
  const PhaseCards = props.projectPhases.map((name, index) => (
    <PhaseWidgetCard
      key={index}
      label={name}
      timeframe="May 10 - June 11"
      completion={{ tasksCompleted: 5, totalTasks: 5 }}
      phaseColor={PhaseColors[index]}
    />
  ));

  return (
    <div className="project-phase-page-main">
      <div className="project-phase-first-section">
        <TimeLine />
      </div>
      <div className="project-phase-second-section">
        <ImageList
          dataSource={"https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectBCD/Pictures/"}
        />
        <div className="project-phase-card-section">
          {PhaseCards}
          <div about="the task will be here">
            <AddTask
              parent={null}
              url="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/Task2"
            ></AddTask>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPhases;
