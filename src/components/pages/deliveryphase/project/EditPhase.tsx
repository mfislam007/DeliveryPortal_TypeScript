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
  const [selectedDate, setSelectedDate] = React.useState(new Date("2014-08-18T21:11:54"));
  return (
    <div>
      <h1>Edit phases</h1>
      <Modal isOpen={true}>
        <Grid container justify="space-around">
          <TextField id="phase" value={props.phase} label="Phase" />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
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
