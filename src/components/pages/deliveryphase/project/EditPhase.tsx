import React from "react";
import "date-fns";
import TextField from "@material-ui/core/TextField";
import Modal from "react-modal";
interface Props {
  phase: string;
  start: Date;
  end: Date;
}
const EditPhase: React.FC<Props> = (props): JSX.Element => {
  return (
    <div>
      <h1>Edit phases</h1>
      <Modal isOpen={true}>
        <TextField id="phase" value={props.phase} label="Phase" />
      </Modal>
    </div>
  );
};

export default EditPhase;
