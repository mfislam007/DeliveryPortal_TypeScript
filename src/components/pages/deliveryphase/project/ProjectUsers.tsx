import React from "react";
import "./ProjectPage.css";
import UserInfoBar from "../../../list-items/UserInfoBar";
import { useParams } from "react-router-dom";

const ProjectUsers: React.FC = (): JSX.Element => {
  const { id } = useParams();
  return (
    <div id={id} className="projectUsersContainer">
      <div className="usersElement">
        <h2>Admins</h2>
        <hr />
        <UserInfoBar name="Esko Petäjä" company="Prima Power" />
        <UserInfoBar name="Timo Kankaanpää" company="Ekseli" />
        <UserInfoBar name="Admin Name" company="ABB" />
        <h2>Users</h2>
        <hr />
        <UserInfoBar name="First Last" company="ABB" />
        <UserInfoBar name="First Last" company="ABB" />
      </div>
    </div>
  );
};

export default ProjectUsers;
