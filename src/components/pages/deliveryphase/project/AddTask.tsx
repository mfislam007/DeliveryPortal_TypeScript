import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Task from "../../../../entity/Task";
import { updateTask, getTask } from "../../../../controllers/TaskController";

interface Props {
  parent: string;
}

/** Dialog to enter data for a new task */
const AddTask: React.FC<Props> = (props): JSX.Element => {
  //creatinf demo task
  const [task, setTask] = useState<Task>(new Task(""));

  useEffect(() => {
    const webId = "https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/Task2";
    const task2 = new Task();
    task2.name = "Example task";
    task2.description = "New description";
    task2.actionStatusType = "In progress";
    updateTask(webId, task2);
    getTask(webId).then(result => {
      setTask(result);
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("Task");
  const [status, setStatus] = React.useState("New");
  const handleChange = (event: any) => {
    setType(event.target.value);
  };
  const handleStatus = (event: any) => {
    setStatus(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button startIcon={<AddIcon />} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add a task
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a task for {props.parent}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Add a task to be carried out during this {props.parent} phase
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            value={task.name}
            id="https://schema.org/Action#name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="https://schema.org/Action#description"
            value={task.description}
            label="Description"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="responsibility"
            label="Responsibility organization"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="person"
            label="Responsibility person"
            type="text"
            fullWidth
          />
          <p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
            >
              <MenuItem value="Task">Task</MenuItem>
              <MenuItem value="Course">Course link</MenuItem>
              <MenuItem value="File upload">File upload</MenuItem>
              <MenuItem value="Milestone">Milestone</MenuItem>
              <MenuItem value="Check list">Check list</MenuItem>
            </Select>
          </p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={task.actionStatusType}
            onChange={handleChange}
          >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="In progress">In progress</MenuItem>
            <MenuItem value="Resolved">Resolved</MenuItem>
            <MenuItem value="Rejected">Rejected</MenuItem>
          </Select>
          <TextField margin="dense" id="deadline" label="Deadline" type="Date" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default AddTask;
