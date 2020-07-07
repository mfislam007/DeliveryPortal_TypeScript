import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import GetProjects from "../../containers/GetProjects/GetProjects";
import ProjectPageSwitch from "./ProjectPageSwitch";

const DeliveryPhaseSwitch: React.FC = (): JSX.Element => {
  let { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path + "/"} component={GetProjects}></Route>
      <Route path={path + "/projectid=:id"} component={ProjectPageSwitch}></Route>
    </Switch>
  );
};

export default DeliveryPhaseSwitch;
