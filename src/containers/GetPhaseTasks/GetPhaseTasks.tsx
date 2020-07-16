import React, { useState, useEffect, ChangeEvent, Fragment } from "react";

import RenderTaskList from "../../components/RenderTaskList/RenderTaskList";

type Props = {
  currentPhase: {
    label: string;
    color: string;
  };
  dataSource?: string;
};

const GetPhaseTasks: React.FC<Props> = (props): JSX.Element => {
  const [currentPhase, setCurrentPhase] = useState(undefined as string);
  const [phaseColor, setPhaseColor] = useState("#F5F5DC");
  const [phaseTasks, setPhaseTasks] = useState(
    [] as {
      id: number;
      taskLevel: string;
      taskType: string;
      taskAuthor: string;
      completion: number;
    }[]
  );
  const [dataSource, setDataSource] = useState(undefined as string);

  useEffect(() => {
    setCurrentPhase(props.currentPhase.label);
    setPhaseColor(props.currentPhase.color);

    if (props.dataSource !== undefined) {
      setDataSource(props.dataSource);
      // TODO (Antti Välimaa) [Fetch from tasklist from POD for the current phase.]
    }
  }, [props]);

  const handleChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => {
    const value = event.target.value;
    let idx = 0;

    if (event.target.name !== undefined) {
      idx = parseInt(event.target.name);
    }

    setPhaseTasks(prevPhaseTasks => {
      const updatedPhaseTasks = prevPhaseTasks.map(phaseTask => {
        if (phaseTask.id === idx) {
          phaseTask.completion = value as number;
        }
        return phaseTask;
      });
      return updatedPhaseTasks;
    });
  };

  return (
    <Fragment>
      <RenderTaskList
        phaseLabel={currentPhase}
        phaseTasks={phaseTasks}
        phaseColor={phaseColor}
        handleChange={handleChange}
      />
    </Fragment>
  );
};

export default GetPhaseTasks;
