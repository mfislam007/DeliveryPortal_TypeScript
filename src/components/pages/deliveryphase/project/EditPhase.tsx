import React from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Modal from "react-modal";
interface Props {
  phase: string;
  start: Date;
  end: Date;
}
/**This modal component is used to adjust phase start and end time
 * @See https://github.com/mui-org/material-ui-pickers/issues/1440
 */

const EditPhase: React.FC<Props> = (props): JSX.Element => {
  const [startDate, setStartDate] = React.useState(props.start);
  const [endDate, setEndDate] = React.useState(props.end);

  function handleDateChange(date: Date) {
    setStartDate(date);
  }

  function parsePhaseName(url: string) {
    return url.substring(url.lastIndexOf("/") + 1, url.length);
  }

  function handleEndDateChange(date: Date) {
    setEndDate(date);
  }

  const useStyles = makeStyles(theme => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <h1>Edit phases</h1>
      <Modal isOpen={true}>
        <div className={classes.root}>
          <TextField id="phase" value={parsePhaseName(props.phase)} label="Phase" />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="date-picker-inline"
              label="Start date"
              value={startDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="date-picker-inline"
              label="End date"
              value={endDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <div className={classes.root}>
            <Button variant="contained" color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditPhase;
