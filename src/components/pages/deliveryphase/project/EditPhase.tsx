import React from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";
import Modal from "@material-ui/core/Modal";
import { updatePhaseDates } from "../../../../controllers/ProjectController/PhaseController";
import { getPhaseDate } from "../../../../controllers/ProjectController/PhaseController";

interface Props {
  phase: string;
  start: Date;
  end: Date;
  open: boolean;
  toggle: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
/**This modal component is used to adjust phase start and end time and finally to save the changed to the POD where the phase data locates.
 * @See https://github.com/mui-org/material-ui-pickers/issues/1440 for date-fns use, needed to use older version of @date-io/date-fns in package.json
 * TODO: Fix "App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`."
 */

const EditPhase: React.FC<Props> = (props): JSX.Element => {
  const [phase, setPhase] = React.useState(props.phase);
  const [startDate, setStartDate] = React.useState(props.start);
  const [endDate, setEndDate] = React.useState(props.end);
  const [open, setOpen] = React.useState(props.open);
  const [modalStyle] = React.useState(getModalStyle);

  /**Before editing the dates, fetching the dates from POD to make sure using latest values */
  React.useEffect(() => {
    getPhaseDate(phase, "https://schema.org/startTime").then(result => {
      setStartDate(result);
    });
    getPhaseDate(phase, "https://schema.org/endTime").then(result => {
      setEndDate(result);
    });
    setOpen(props.open);
  }, [props]);

  const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();

  function handleStartDateChange(date: Date): void {
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
    //save to localStorage
    let phaseCache: any = {};
    phaseCache["https://schema.org/identifier"] = props.phase;
    phaseCache["https://schema.org/startTime"] = startDate;
    phaseCache["https://schema.org/endTime"] = endDate;
    localStorage.setItem("phase", JSON.stringify(phaseCache));
    console.log(localStorage.getItem("phase"));
    //save to POD
    updatePhaseDates(phase, startDate, endDate);
    setOpen(false);
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
    console.log("Modal closed");
    setOpen(false);
    props.toggle;
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <TextField id="phase" disabled value={parsePhaseName(props.phase)} label="Phase" />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="https://schema.org/startTime"
              label="Start date"
              value={startDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="yyyy-MM-dd"
              margin="normal"
              id="https://schema.org/endTime"
              label="End date"
              value={endDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
          <div>
            <Button variant="contained" color="primary" onClick={handleClose}>
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
