import React, { useState, useEffect, ChangeEvent, Fragment } from "react";

import RenderTaskList from "../../components/RenderTaskList/RenderTaskList";
import { getTasksOfPhase } from "../../controllers/TaskController";
import Task from "../../entities/Task";

type Props = {
  currentPhase: {
    label: string;
    color: string;
  };
  dataSource?: string;
};

type TasklistItem = {
  id: number;
  taskLevel: string;
  taskType: string;
  taskAuthor: string;
  completion: number;
};

const GetPhaseTasks: React.FC<Props> = (props): JSX.Element => {
  const [currentPhase, setCurrentPhase] = useState(undefined as string);
  const [phaseColor, setPhaseColor] = useState("#F5F5DC");
  const [phaseTasks, setPhaseTasks] = useState([] as TasklistItem[]);
  const [tasks, setTasks] = useState([] as Task[]);
  const [dataSource, setDataSource] = useState(undefined as string);

  function getTasks(webID: string) {
    getTasksOfPhase(webID).then(result => {
      setTasks(result);
    });
  }

  useEffect(() => {
    setCurrentPhase(props.currentPhase.label);
    setPhaseColor(props.currentPhase.color);

    if (props.dataSource !== undefined) {
      setDataSource(props.dataSource);
      getTasks(props.dataSource);
    }
  }, [props]);

  useEffect(() => {
    // NOTE (Antti Välimaa) [This useEffect is used to map the POD-data to fit the component.]
    if (tasks.length !== 0) {
      setPhaseTasks(
        tasks.map((task, index) => ({
          id: index,
          taskLevel: "Task",
          taskType: task.name,
          taskAuthor: "Jane Doe",
          completion: 0,
        }))
      );
    }
  }, [tasks]);

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
