import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDocument } from "tripledoc";

import "../DeliveryPhaseIndex.css";
import { PhaseColors } from "../../../../constants/WidgetColors";
import ImageList from "../../../../containers/ImageList/ImageList";
import TimeLine from "../../../time-line/TimeLine";
import PhaseWidgetCard from "../../../list-items/PhaseWidgetCard";

const ProjectPhases: React.FC = (): JSX.Element => {
  const [names, setNames] = useState([] as string[]);
  const { id } = useParams();

  useEffect(() => {
    /** Should pass the webid and project name as argument. To list the phases user must have read access to POD */
    (async (webId: string) => {
      const profileDoc = await fetchDocument(webId);
      const profile = profileDoc.getSubject(webId);
      console.log(JSON.stringify(profile.getAllStrings("https://schema.org/Action#name")));
      setNames(profile.getAllStrings("https://schema.org/Action#name"));
    })(`https://ekseli.dev.inrupt.net/private/dp2/cases/${id}/project.ttl`);
  }, []);

  const PhaseCards = names.map((name, index) => (
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
      <div className="first-section">
        <TimeLine />
        <ImageList
          dataSource={"https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectBCD/Pictures/"}
        />
      </div>
      <div className="project-phase-second-section">{PhaseCards}</div>
    </div>
  );
};

export default ProjectPhases;
