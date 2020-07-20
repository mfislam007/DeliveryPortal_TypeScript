import React, { useState } from "react";
import { ProviderLogin } from "@inrupt/solid-react-components";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Slide, { SlideProps } from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";

import "./Login.scss";

const Transition = React.forwardRef<HTMLAnchorElement, SlideProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Login: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <IconButton
          color="inherit"
          aria-label="login"
          onClick={handleClickOpen}
          style={{ marginTop: 0 }}
        >
          <ExitToAppIcon />
        </IconButton>
      </div>
      <div>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <ProviderLogin className="provider-login" callbackUri={`${window.location.origin}/`} />
        </Dialog>
      </div>
    </div>
  );
};

export default Login;
