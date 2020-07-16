import React from "react";

import "../DeliveryPhaseIndex.scss";
import ImageList from "../../../../containers/ImageList/ImageList";
import TimeLine from "../../../time-line/TimeLine";
import GetPhases from "../../../../containers/GetPhases/GetPhases";
import GetPhaseTasks from "../../../../containers/GetPhaseTasks/GetPhaseTasks";

const ProjectPhases: React.FC = (): JSX.Element => {
  return (
    <div className="project-phase-page-main">
      <div className="project-phase-first-section">
        <TimeLine />
      </div>
      <div className="project-phase-second-section">
        <ImageList
          dataSource={"https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectBCD/Pictures/"}
        />
        <GetPhases />
        <GetPhaseTasks currentPhase={{ label: "prep", color: "pink" }} dataSource={undefined} />
      </div>
    </div>
  );
};

export default ProjectPhases;
