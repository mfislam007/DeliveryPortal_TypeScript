import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ProjectPageSwitch from "./ProjectPageSwitch";
import DeliveryPhaseIndex from "../pages/deliveryphase/DeliveryPhaseIndex";

const DeliveryPhaseSwitch: React.FC = (): JSX.Element => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path + "/"} component={DeliveryPhaseIndex}></Route>
      <Route path={path + "/projectid=:id"} component={ProjectPageSwitch}></Route>
    </Switch>
  );
};

export default DeliveryPhaseSwitch;
