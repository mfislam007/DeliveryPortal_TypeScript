import React from "react";
import { Switch, Route } from "react-router-dom";

import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import DeliveryPhaseSwitch from "./DeliveryPhaseSwitch";

const HomePageSwitch: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/deliveryportal" component={DeliveryPhaseSwitch}></Route>
      <Route path="/*" component={PageNotFound}></Route>
    </Switch>
  );
};

export default HomePageSwitch;
