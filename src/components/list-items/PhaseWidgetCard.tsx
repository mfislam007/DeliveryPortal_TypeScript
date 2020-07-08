import React, { useState, useEffect } from "react";

import "./PhaseWidgetCard.css";
import optionsIcon from "../../assets/images/commonicons/options-icon.png";
import EditPhase from "../pages/deliveryphase/project/EditPhase";

type Props = {
  label: string;
  timeframe?: string;
  completion?: {
    tasksCompleted: number;
    totalTasks: number;
  };
  phaseColor?: string;
};

const PhaseWidgetCard: React.FC<Props> = (props): JSX.Element => {
  const [label, setLabel] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [completion, setCompletion] = useState({ tasksCompleted: 0, totalTasks: 0 });
  const [phaseColor, setPhaseColor] = useState("#6da4cd");

  useEffect(() => {
    setLabel(props.label);

    if (props.timeframe !== undefined) {
      setTimeframe(props.timeframe);
    }

    if (props.completion !== undefined) {
      setCompletion(props.completion);
    }

    if (props.phaseColor !== undefined) {
      setPhaseColor(props.phaseColor);
    }
  }, [props]);

  const showCompletion = () => {
    if (props.completion !== undefined) {
      return (
        <div className="PhaseWidgetCardCompletion" style={{ color: phaseColor }}>
          {completion.tasksCompleted}/{completion.totalTasks}
        </div>
      );
    } else {
      return <div />;
    }
  };

  const handleOnClick = (): void => {
    let label2 = "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/" + label;
    <EditPhase phase={label2} start={new Date(2020, 7, 1)} end={new Date(2020, 8, 1)} />;
    alert("Hello " + label2);
  };

  return (
    <div className="PhaseWidgetCardMain" onClick={handleOnClick}>
      <div className="PhaseWidgetCardTextContainer">
        <div>
          <div className="PhaseWidgetCardTextLabel">{label}</div>
          <div className="PhaseWidgetCardTextTimeframe">{timeframe}</div>
        </div>
        <div className="PhaseWidgetCardTextDetails">See Details</div>
      </div>
      <div className="PhaseWidgetCardMisc">
        <div className="PhaseWidgetCardOptions">
          <img src={optionsIcon} alt="options"></img>
        </div>
        {showCompletion()}
      </div>
    </div>
  );
};

export default PhaseWidgetCard;
