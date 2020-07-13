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
import { updateTask, getTask, createTask } from "../../../../controllers/TaskController";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { datePickerDefaultProps } from "@material-ui/pickers/constants/prop-types";

interface Props {
  url: string;
  open: boolean;
}

/** Dialog to enter data for a new task */
const AddTask: React.FC<Props> = (props): JSX.Element => {
  //creatinf demo task
  const [task, setTask] = useState<Task>(new Task());
  const [open, setOpen] = useState(props.open);
  const [type, setType] = useState("Task");
  const [status, setStatus] = useState("New");
  const [url, setUrl] = useState<string>();
  useEffect(() => {
    //set default endTime fro a task fro one month further
    let newDate = new Date();
    newDate.setDate(newDate.getDate() + 30);
    let newTask = { ...task };
    newTask.endTime = newDate;
    setTask(newTask);
    setUrl(props.url);
    getTask(url).then(result => {
      setTask(result);
    });
  }, []);

  const save = () => {
    const task2 = new Task();
    task2.name = "TaskX";
    task2.description = "New description2";
    task2.actionStatusType = "In progress";
    alert(task.endTime);
    task2.endTime = task.endTime;
    createTask(url, task2);
    setOpen(false);
  };

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

  function handleEndDateChange(date: Date): void {
    let atask = { ...task };
    atask.endTime = date;
    setTask(atask);
    console.log(JSON.stringify(task));
  }

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
          {/* <TextField
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
          /> */}
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
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="https://schema.org/endTime"
              label="Start date"
              value={task.endTime}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={save} color="primary">
            Save
          </Button>
        </DialogActions>
        <a href="https://ekseli.dev.inrupt.net/private/dp2/cases/ProjectABC/Installation/Task2/action.ttl">
          Task POD link
        </a>
      </Dialog>
    </div>
  );
};
export default AddTask;
