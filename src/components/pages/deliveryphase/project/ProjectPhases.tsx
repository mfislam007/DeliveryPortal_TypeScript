import React, { useState } from "react";
import ImageList from "../../../../containers/ImageList/ImageList";
import TimeLine from "../../../Timeline/TimeLine";
import GetPhases from "../../../../containers/GetPhases/GetPhases";
import GetPhaseTasks from "../../../../containers/GetPhaseTasks/GetPhaseTasks";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

import "./ProjectPage.scss";

const ProjectPhases: React.FC = (): JSX.Element => {
  const [isPhaseSelected, setIsPhaseSelected] = useState(false);
  const [phaseInfo, setPhaseInfo] = useState({
    label: "non-label",
    color: "pink",
  });
  const { id } = useParams();

  const getPhaseInfo = (phaseInfo: { label: string; color: string }) => {
    const phaseLabel = phaseInfo.label;
    const phaseColor = phaseInfo.color;
    setPhaseInfo({ label: phaseLabel, color: phaseColor });
    setIsPhaseSelected(true);
  };

  return (
    <div className="project-phase-page-main">
      <div className="project-phase-first-section">
        <Typography variant="h5">Timeline</Typography>
        <TimeLine />
      </div>
      <div className="project-phase-second-section">
        <ImageList
          dataSource={"https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectBCD/Pictures/"}
        />
        <GetPhases getPhaseInfo={getPhaseInfo} />
        {isPhaseSelected && (
          <GetPhaseTasks
            currentPhase={phaseInfo}
            dataSource={`https://ekseli.dev.inrupt.net/private/dp2/cases/${id}/${phaseInfo.label}/`}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectPhases;
