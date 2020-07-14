import React from "react";
import { useHistory } from "react-router-dom";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import EuroIcon from "@material-ui/icons/Euro";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./Homepage.scss";

const HomePage: React.FC = (): JSX.Element => {
  let history = useHistory();

  return (
    <div>
      <Typography variant="h2">Customer Portal</Typography>
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
        <Grid
          className="paper-grid"
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <Paper className="paper" elevation={20}>
            <IconButton
              color="primary"
              onClick={() => {
                history.push("/salesphase");
              }}
            >
              <EuroIcon fontSize="large" />
            </IconButton>
          </Paper>
          <Paper className="paper" elevation={20}>
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
      </Grid>
    </div>
  );
};

export default HomePage;
