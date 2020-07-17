import React, { useState, useEffect } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
        <div className="PhaseWidgetCardOptions">
          <MoreVertIcon />
        </div>
        {showCompletion()}
      </div>
    </div>
  );
};

export default PhaseWidgetCard;
