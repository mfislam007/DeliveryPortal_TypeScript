import React from "react";
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

interface Props {
  parent: string;
}

/** Dialog to enter data for a new task */
const AddTask: React.FC<Props> = (props): JSX.Element => {
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
          <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth />
          <TextField margin="dense" id="name" label="Description" type="text" fullWidth />
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
              value={type}
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
            value={status}
            onChange={handleChange}
          >
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
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
