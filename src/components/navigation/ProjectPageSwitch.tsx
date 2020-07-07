import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import ProjectIndex from "../pages/deliveryphase/project/ProjectStream";
import ProjectUsers from "../pages/deliveryphase/project/ProjectUsers";
import GetPhases from "../../containers/GetPhases/GetPhases";

const ProjectCardSwitch: React.FC = (): JSX.Element => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path + "/users"} component={ProjectUsers}></Route>
      <Route path={path + "/phase"} component={GetPhases}></Route>
      <Route path={path} component={ProjectIndex}></Route>
    </Switch>
  );
};

export default ProjectCardSwitch;
