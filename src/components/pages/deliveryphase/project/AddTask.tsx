import React, { Props } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

interface Props {
  parent: string;
}

/** Dialog to enter data for a new task */
const AddTask: React.FC<Props> = (props): JSX.Element => {
  const [open, setOpen] = React.useState(false);

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
          <DialogContentText>
            Add a task to be carried out for an organization or person
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth />
          <TextField margin="dense" id="response" label="Response" type="text" fullWidth />
          <TextField margin="dense" id="type" label="Type" type="text" fullWidth />
          <TextField margin="dense" id="status" label="Status" type="text" fullWidth />
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
