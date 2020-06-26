import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import ProjectIndex from "../pages/deliveryphase/project/ProjectStream";
import ProjectPhases from "../pages/deliveryphase/project/ProjectPhases";
import ProjectUsers from "../pages/deliveryphase/project/ProjectUsers";

const ProjectCardSwitch: React.FC = (): JSX.Element => {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <Link to={url}>Stream_</Link>
      <Link to={url + "/phase"}>Phase_</Link>
      <Link to={url + "/users"}>Users_</Link>
      <Switch>
        <Route path={path + "/users"} component={ProjectUsers}></Route>
        <Route path={path + "/phase"} component={ProjectPhases}></Route>
        <Route path={path} component={ProjectIndex}></Route>
      </Switch>
    </div>
  );
};

export default ProjectCardSwitch;
