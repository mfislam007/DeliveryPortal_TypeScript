import React from "react";
import { useParams } from "react-router-dom";

import "./ProjectPage.scss";
import UserInfoBar from "../../../list-items/UserInfoBar";

const ProjectUsers: React.FC = (): JSX.Element => {
  const { id } = useParams();

  return (
    <div id={id} className="projectUsersContainer">
      <div className="usersElement">
        <h2>Admins</h2>
        <hr />
        <UserInfoBar name="John Smith" company="Company A" />
        <UserInfoBar name="Jane Doe" company="Company A" />
        <UserInfoBar name="Adam Lambert" company="Company B" />
        <h2>Users</h2>
        <hr />
        <UserInfoBar name="Jane Smith" company="Company A" />
        <UserInfoBar name="John Doe" company="Company A" />
      </div>
    </div>
  );
};

export default ProjectUsers;
