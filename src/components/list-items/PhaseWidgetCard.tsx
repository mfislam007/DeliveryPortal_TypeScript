import React, { useState, useEffect } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./PhaseWidgetCard.scss";
import EditPhase from "../pages/deliveryphase/project/EditPhase";
import data from "../../../settings.json";

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
  const [project, setProject] = useState("ProjectABC");
  const [timeFrame, setTimeFrame] = useState("");
  const [completion, setCompletion] = useState({ tasksCompleted: 0, totalTasks: 0 });
  const [phaseColor, setPhaseColor] = useState("#6da4cd");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [myUrl, setMyUrl] = useState("");
  useEffect(() => {
    setLabel(props.label);
    if (props.label !== undefined) {
      setMyUrl(data.solid.locations.podRoot + project + "/" + props.label);
    }
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

  const toggleEditDates = (): void => {
    setDialogOpen(false);
  };

  /** To enable EditPhase to change the timeframe */
  const setPhaseTimes = (times: string): void => {
    setTimeFrame(times);
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
            phase={myUrl}
            start={null}
            end={null}
            editTimes={setPhaseTimes}
          />
        </div>
        {showCompletion()}
      </div>
    </div>
  );
};

export default PhaseWidgetCard;
