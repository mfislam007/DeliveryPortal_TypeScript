import React, { useState, useEffect } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./PhaseWidgetCard.scss";
import optionsIcon from "../../assets/images/commonicons/options-icon.png";
import EditPhase from "../pages/deliveryphase/project/EditPhase";
import AddTask from "../pages/deliveryphase/project/AddTask";

type Props = {
  label: string;
  timeframe: string;
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
  const [taskOpen, setTaskOpen] = useState(false);
  //TODO: change the hard coded webid
  const [url, setUrl] = useState(
    "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/" + props.label
  );

  useEffect(() => {
    setLabel(props.label);
    if (props.timeframe !== undefined) {
      setTimeFrame(props.timeframe);
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

  const addTask = () => {
    setTaskOpen(true);
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
    <div className="PhaseWidgetCardMain" onClick={addTask}>
      <div className="PhaseWidgetCardTextContainer">
        <div>
          <div className="PhaseWidgetCardTextLabel">{label}</div>
          <div className="PhaseWidgetCardTextTimeFrame">{timeFrame}</div>
        </div>
        <div className="PhaseWidgetCardTextDetails">See Details</div>
      </div>
      <div className="PhaseWidgetCardMisc">
        <div className="PhaseWidgetCardOptions" onClick={enableEditDates}>
          <img src={optionsIcon} alt="options"></img>
          <EditPhase
            toggle={toggleEditDates}
            open={dialogOpen}
            phase={url}
            start={null}
            end={null}
          />
          <div className="PhaseWidgetCardOptions">
            <MoreVertIcon />
          </div>
          {showCompletion()}
          <AddTask
            open={false}
            url={"https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/" + props.label + "/"}
          />
        </div>
      </div>
    </div>
  );
};

export default PhaseWidgetCard;
