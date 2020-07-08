import React from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
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

  const handleDateChange = date => {
    setStartDate(date);
  };

  const parsePhaseName = url => {
    return url.substring(url.lastIndexOf("/") + 1, url.length);
  };

  const handleEndDateChange = date => {
    if (endDate.getMilliseconds() > startDate.getMilliseconds()) {
      setEndDate(date);
    } else {
      alert("Start date cannot be later than end date");
    }
  };

  return (
    <div>
      <h1>Edit phases</h1>
      <Modal isOpen={true}>
        <Grid container justify="space-around">
          <p>
            <TextField id="phase" value={parsePhaseName(props.phase)} label="Phase" />
          </p>
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
        </Grid>
      </Modal>
    </div>
  );
};

export default EditPhase;
