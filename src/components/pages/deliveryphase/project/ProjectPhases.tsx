import React, { useState } from "react";

import "../DeliveryPhaseIndex.scss";
import ImageList from "../../../../containers/ImageList/ImageList";
import TimeLine from "../../../time-line/TimeLine";
import GetPhases from "../../../../containers/GetPhases/GetPhases";
import GetPhaseTasks from "../../../../containers/GetPhaseTasks/GetPhaseTasks";

const ProjectPhases: React.FC = (): JSX.Element => {
  const [isPhaseSelected, setIsPhaseSelected] = useState(false);
  const [phaseInfo, setPhaseInfo] = useState({
    label: "non-label",
    color: "pink",
  });

  const getPhaseInfo = (phaseInfo: { label: string; color: string }) => {
    const phaseLabel = phaseInfo.label;
    const phaseColor = phaseInfo.color;
    setPhaseInfo({ label: phaseLabel, color: phaseColor });
    setIsPhaseSelected(true);
  };

  return (
    <div className="project-phase-page-main">
      <div className="project-phase-first-section">
        <TimeLine />
      </div>
      <div className="project-phase-second-section">
        <ImageList
          dataSource={"https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectBCD/Pictures/"}
        />
        <GetPhases getPhaseInfo={getPhaseInfo} />
        {isPhaseSelected && <GetPhaseTasks currentPhase={phaseInfo} dataSource={undefined} />}
      </div>
    </div>
  );
};

export default ProjectPhases;
