import React, { ChangeEvent } from "react";
import { Table, TableBody, TableRow, TableCell, Select, MenuItem, Button } from "@material-ui/core";
import AttachmentOutlinedIcon from "@material-ui/icons/AttachmentOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FilterListIcon from "@material-ui/icons/FilterList";

import "./RenderTaskList.scss";
import { taskCompletionColors } from "../../constants/WidgetColors";

type Props = {
  phaseLabel: string;
  phaseTasks: {
    id: number;
    taskLevel: string;
    taskType: string;
    taskAuthor: string;
    completion: number;
  }[];
  handleChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown }>) => void;
  phaseColor: string;
};

const RenderTaskList = (props: Props) => {
  const showCompletion = () => {
    const completionValue = 2;
    const tasksCompleted = props.phaseTasks.reduce(
      (count, task) => (task.completion === completionValue ? ++count : count),
      0
    );
    return tasksCompleted + "/" + props.phaseTasks.length;
  };

  const listTasks = props.phaseTasks.map((task, index) => (
    <TableRow key={task.id}>
      <TableCell>{task.taskLevel}</TableCell>
      <TableCell>{task.taskType}</TableCell>
      <TableCell>{task.taskAuthor}</TableCell>
      <TableCell align="right">
        <AttachmentOutlinedIcon />
      </TableCell>
      <TableCell align="right">
        <Select
          name={index.toString()}
          autoWidth={true}
          onChange={props.handleChange}
          value={task.completion}
          style={{ backgroundColor: taskCompletionColors[task.completion] }}
        >
          <MenuItem value={0}>new</MenuItem>
          <MenuItem value={1}>active</MenuItem>
          <MenuItem value={2}>completed</MenuItem>
        </Select>
      </TableCell>
    </TableRow>
  ));

  return (
    <div className="task-view-main">
      <div className="task-view-container">
        <div className="task-view-header" style={{ backgroundColor: props.phaseColor }}>
          <div className="task-view-list-type">{props.phaseLabel}</div>
          <div className="task-view-shown-completion">{showCompletion()}</div>
          <div className="task-view-header-icons">
            <FilterListIcon />
            <SettingsOutlinedIcon />
          </div>
        </div>
        <div className="task-view-tasklist">
          <Table>
            <TableBody>{listTasks}</TableBody>
          </Table>
          <div className="task-view-edit-tasks-button">
            <Button style={{ backgroundColor: props.phaseColor }}>+ ADD TASK</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderTaskList;
