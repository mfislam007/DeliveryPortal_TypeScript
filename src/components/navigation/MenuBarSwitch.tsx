import React from "react";
import { Switch, Route } from "react-router-dom";

import MenuBar from "../menubar/MenuBar";

const MenuBarSwitch: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/">
        <div></div>
      </Route>
      <Route path="/*" component={MenuBar}></Route>
    </Switch>
  );
};

export default MenuBarSwitch;
