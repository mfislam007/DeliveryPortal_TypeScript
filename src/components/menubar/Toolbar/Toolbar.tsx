import React from "react";
import { Route, useHistory } from "react-router";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import ToolbarProjectPageLinks from "./ToolbarProjectPageLinks";

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
  show: boolean;
};

const Toolbar: React.FC<Props> = (props): JSX.Element => {
  let history = useHistory();

  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton onClick={props.onClick} />
        </div>
        <div className="toolbar-logo">
          <a href="/">ABB's Delivery Portal</a>
        </div>
        <div>
          <button className="toolbar-project"> R&amp;D Project </button>
        </div>
        <div className="spacer" />
        <Route path="/deliveryportal/projectid=:id" component={ToolbarProjectPageLinks}></Route>
        <div className="spacer" />

        <div className="toolbar-navigation-items-2">
          <ul>
            <li>
              <IconButton
                aria-label="add project"
                color="inherit"
                onClick={() => {
                  history.push("");
                }}
              >
                <HomeIcon fontSize="default" />
              </IconButton>
            </li>
            <li>
              <IconButton color="inherit">
                <AddIcon fontSize="default" />
              </IconButton>
            </li>
            <li>
              <IconButton color="inherit">
                <PersonIcon fontSize="default" />
              </IconButton>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
