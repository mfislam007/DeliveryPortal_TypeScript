import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./AddProject.css";
import ProjectContainer from "./ProjectContainer";

const AddProject: React.FC = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [test, setTest] = useState("");
  const [project, setProject] = useState({ name: "", customer: "", ProjectManager: "" });

  {
    /* useEffect(() => {
    setProjectName(JSON.parse(localStorage.getItem("projectName")));
    if (!localStorage.getItem("projectName")) {
      setProjectName("projectName");
    } else {
      setProjectName("");
    }
  }, []);*/
  }

  {
    /*useEffect(() => {
    setCustomerName(JSON.parse(localStorage.getItem("customerName")));
    if (!localStorage.getItem("customerName")) {
      setCustomerName("customerName");
    } else {
      setCustomerName("");
    }
  }, []);*/
  }

  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(project));
  }, [project]);

  {
    /*useEffect(() => {
    localStorage.setItem("customerName", JSON.stringify(customerName));
  }, [customerName]);*/
  }

  const onRequestOpen = () => {
    setModalIsOpen(true);
  };
  const onRequesClose = () => {
    setModalIsOpen(false);
  };

  const onChangeProject = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.id == "name") {
      const newProject = { ...project };
      newProject.name = event.currentTarget.value;
      setProject(newProject);
    }
    if (event.currentTarget.id == "customer") {
      const newProject = { ...project };
      newProject.customer = event.currentTarget.value;
      setProject(newProject);
    }
    if (event.currentTarget.id == "ProjectManager") {
      const newProject = { ...project };
      newProject.ProjectManager = event.currentTarget.value;
      setProject(newProject);
    }
  };

  {
    /* const onChangeCustomer = (event: React.FormEvent<HTMLInputElement>) => {
    setCustomerName(event.currentTarget.value);
  };*/
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(
      " Project name: " +
        project.name +
        " and " +
        " Customer name: " +
        project.customer +
        " and " +
        " ProjectManager name: " +
        project.ProjectManager +
        " are created "
    );
    setTest(JSON.stringify(<ProjectContainer project={project} />));
    event.preventDefault();
  };

  const isEnabled =
    project.name.length > 3 && project.customer.length > 3 && project.ProjectManager.length > 3;

  return (
    <div className="maincontent">
      <button onClick={onRequestOpen}>Open modal</button>
      <Modal isOpen={modalIsOpen}>
        <form onSubmit={handleSubmit}>
          <div className="projectcontent">
            <h2 text-align="center">Add Delivery Portal</h2>

            <label>Project Name:</label>
            <input id="name" value={project.name} type="text" onChange={onChangeProject} />
          </div>
          <div className="customercontent">
            <label>Customer Name:</label>
            <input id="customer" value={project.customer} type="text" onChange={onChangeProject} />
          </div>
          <div className="managercontent">
            <label>Project Manager:</label>
            <input
              id="ProjectManager"
              value={project.ProjectManager}
              type="text"
              onChange={onChangeProject}
            />
          </div>
          <div>
            <button className="button1" onClick={onRequesClose}>
              ⨯ Cancel
            </button>
            <button className="button2" type="submit" disabled={!isEnabled}>
              + Create
            </button>
          </div>
        </form>
        {test}
      </Modal>
    </div>
  );
};
export default AddProject;
