import React from "react";
import { useRouteMatch, Link } from "react-router-dom";

const ProjectPageLinkSwitch: React.FC = (): JSX.Element => {
  const { url } = useRouteMatch();
  return (
    <div className="toolbar_navigation-items">
      <ul>
        <li>
          <Link to={url} className="menu">
            {" "}
            Stream{" "}
          </Link>
        </li>
        <li>
          <Link to={url + "/phase"} className="menu">
            {" "}
            Phases{" "}
          </Link>
        </li>
        <li>
          <Link to={url + "/users"} className="menu">
            {" "}
            Users{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProjectPageLinkSwitch;
