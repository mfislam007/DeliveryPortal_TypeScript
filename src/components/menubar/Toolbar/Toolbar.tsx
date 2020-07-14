import React from "react";
import { Route, useHistory } from "react-router";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import Drawer from "@material-ui/core/Drawer";
import ListItemIcon from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import "./Toolbar.scss";
import ToolbarProjectPageLinks from "./ToolbarProjectPageLinks";

const Toolbar: React.FC = (): JSX.Element => {
  let history = useHistory();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setState({ ...state, left: open });
  };

  return (
    <header className="toolbar">
      <nav className="toolbar-navigation">
        <div>
          <React.Fragment>
            <IconButton aria-label="menu" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer open={state["left"]} onClose={toggleDrawer(false)}>
              <div role="presentation" onClick={toggleDrawer(false)}>
                <ListItem button>
                  <ListItemIcon>
                    <Link to="/deliveryportal" className="link">
                      <ListItemText primary="Delivery Portals" />
                    </Link>
                  </ListItemIcon>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <ListItemText primary="Settings" />
                  </ListItemIcon>
                </ListItem>
              </div>
            </Drawer>
          </React.Fragment>
        </div>
        <Typography variant="h6" className="toolbar-logo">
          ABB's Delivery Portal
        </Typography>
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
