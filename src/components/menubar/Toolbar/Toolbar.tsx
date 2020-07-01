import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import timo1 from "../../../assets/images/menubar/timo1.png";
import home from "../../../assets/images/commonicons/home-icon.png";
import { Route, useHistory } from "react-router";
import ToolbarProjectPageLinks from "./ProjectPageLinkSwitch";

type Props = {
  onClick: React.MouseEventHandler<HTMLElement>;
};
const Toolbar: React.FC<Props> = (props: Props): JSX.Element => {
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
          <button className="toolbar-project"> R&D Project </button>
        </div>
        <div className="spacer" />
        <Route path="/deliveryportal/projectid=:id" component={ToolbarProjectPageLinks}></Route>
        <div className="spacer" />

        <div className="toolbar-navigation-items2">
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
              <img src={timo1} alt="profile" className="profile-image" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
