import React from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Modal from "@material-ui/core/Modal";
import PhaseContainerStub from "./PhaseContainerStub";
interface Props {
  phase: string;
  start: Date;
  end: Date;
  open: boolean;
}
/**This modal component is used to adjust phase start and end time and finally to save the changed to the POD where the phase data locates.
 * @See https://github.com/mui-org/material-ui-pickers/issues/1440 for date-fns iise, needed to use older version of @date-io/date-fns in package.json
 * TODO: Fix "App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`."
 */

const EditPhase: React.FC<Props> = (props): JSX.Element => {
  console.log("here");
  const [startDate, setStartDate] = React.useState(props.start);
  const [endDate, setEndDate] = React.useState(props.end);
  const [open, setOpen] = React.useState(props.open);

  function handleDateChange(date: Date): void {
    setStartDate(date);
  }

  function handleEndDateChange(date: Date): void {
    setEndDate(date);
  }

  function parsePhaseName(url: string): string {
    return url.substring(url.lastIndexOf("/") + 1, url.length);
  }

  /** Will save phase dates to POD, at the moment uses localStorage
   * TODO: Update later to use POD for data storage.
   */
  function save(): void {
    let phase: any = {};
    phase["https://schema.org/identifier"] = props.phase;
    phase["https://schema.org/startTime"] = startDate;
    phase["https://schema.org/endTime"] = endDate;
    console.log(JSON.stringify(phase));
    localStorage.setItem("phase", JSON.stringify(phase));
    <PhaseContainerStub identifier={props.phase} startTime={startDate} endTime={endDate} />;
    alert("Saved to localStorage with name phase :" + localStorage.getItem("phase"));
  }

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h3>Edit phase</h3>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <TextField id="phase" value={parsePhaseName(props.phase)} label="Phase" />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="https://schema.org/startTime"
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
          <div>
            <Button variant="contained" color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={save}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditPhase;
