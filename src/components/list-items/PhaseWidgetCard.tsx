import React, { useState, useEffect } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import EditPhase from "../pages/deliveryphase/project/EditPhase";
import "./PhaseWidgetCard.scss";

type Props = {
  label: string;
  timeFrame?: string;
  completion?: {
    tasksCompleted: number;
    totalTasks: number;
  };
  phaseColor?: string;
};

const PhaseWidgetCard: React.FC<Props> = (props): JSX.Element => {
  const [label, setLabel] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [completion, setCompletion] = useState({ tasksCompleted: 0, totalTasks: 0 });
  const [phaseColor, setPhaseColor] = useState("#6da4cd");
  const [dialogOpen, setDialogOpen] = useState(false);
  //TODO: change the hard coded webid
  const [url, setUrl] = useState(
    "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/" + props.label
  );

  useEffect(() => {
    setLabel(props.label);

    if (props.timeFrame !== undefined) {
      setTimeFrame(props.timeFrame);
    }
    if (props.completion !== undefined) {
      setCompletion(props.completion);
    }
    if (props.phaseColor !== undefined) {
      setPhaseColor(props.phaseColor);
    }
  }, [props]);

  const showCompletion = (): JSX.Element => {
    return props.completion !== undefined ? (
      <div className="PhaseWidgetCardCompletion" style={{ color: phaseColor }}>
        {completion.tasksCompleted}/{completion.totalTasks}
      </div>
    ) : (
      <div />
    );
  };

  const enableEditDates = (): void => {
    setDialogOpen(true);
  };

  const disableEditDates = (): void => {
    setDialogOpen(false);
  };

  const toggleEditDates = (): void => {
    setDialogOpen(false);
  };

  return (
    <div className="PhaseWidgetCardMain">
      <div className="PhaseWidgetCardTextContainer">
        <div>
          <div className="PhaseWidgetCardTextLabel">{label}</div>
          <div className="PhaseWidgetCardTextTimeFrame">{timeFrame}</div>
        </div>
        <div className="PhaseWidgetCardTextDetails">See Details</div>
      </div>
      <div className="PhaseWidgetCardMisc">
        <div className="PhaseWidgetCardOptions" onClick={enableEditDates}>
          <MoreVertIcon />
          <EditPhase
            toggle={toggleEditDates}
            open={dialogOpen}
            phase={url}
            start={null}
            end={null}
          />
        </div>
        {showCompletion()}
      </div>
    </div>
  );
};

export default PhaseWidgetCard;
