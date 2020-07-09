import React, { MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import EuroIcon from "@material-ui/icons/Euro";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import "./Homepage.scss";

const HomePage: React.FC = (): JSX.Element => {
  let history = useHistory();

  return (
    <div className="homePage">
      <Grid container direction="column" justify="center" alignItems="center">
        <Paper elevation={10}>
          <IconButton
            color="primary"
            onClick={() => {
              history.push("/salesphase");
            }}
          >
            <EuroIcon fontSize="large" />
          </IconButton>
        </Paper>
        <Paper elevation={10}>
          <IconButton
            color="primary"
            onClick={() => {
              history.push("/deliveryportal");
            }}
          >
            <LocalShippingIcon fontSize="large" />
          </IconButton>
        </Paper>
      </Grid>
    </div>
  );
};

export default HomePage;
