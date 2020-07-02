import React from "react";
import { Route, useHistory } from "react-router";

import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import ToolbarProjectPageLinks from "./ToolbarProjectPageLinks";
import profile from "../../../assets/images/menubar/profile.png";
import home from "../../../assets/images/menubar/home.png";
import plusIcon from "../../../assets/images/menubar/plus-icon.png";

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
              <img
                src={home}
                alt="home"
                className="home-icon"
                onClick={() => {
                  history.push("");
                }}
              />
            </li>
            <li>
              <img src={plusIcon} alt="plus" className={"plus-icon"} />
            </li>
            <li>
              <img src={profile} alt="profile" className="profile-image" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
