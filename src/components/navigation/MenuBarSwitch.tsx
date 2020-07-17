import React from "react";
import { Switch, Route } from "react-router-dom";
import ToolBar from "../Toolbar/Toolbar";

const MenuBarSwitch: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <div></div>
      </Route>
      <Route path="/*" component={ToolBar}></Route>
    </Switch>
  );
};

export default MenuBarSwitch;
