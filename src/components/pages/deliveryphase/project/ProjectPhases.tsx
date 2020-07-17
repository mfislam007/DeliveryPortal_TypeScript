import React from "react";
import ImageList from "../../../../containers/ImageList/ImageList";
import TimeLine from "../../../Timeline/TimeLine";
import GetPhases from "../../../../containers/GetPhases/GetPhases";
import { Typography } from "@material-ui/core";

import "./ProjectPage.scss";

const ProjectPhases: React.FC = (): JSX.Element => {
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
        <GetPhases />
      </div>
    </div>
  );
};

export default ProjectPhases;
