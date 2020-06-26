import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import DeliveryPhaseIndex from "../pages/deliveryphase/DeliveryPhaseIndex";
import ProjectPageSwitch from "./ProjectPageSwitch";

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
