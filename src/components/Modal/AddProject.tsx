import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./AddProject.css";

const AddProject: React.FC = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    setProjectName(JSON.parse(localStorage.getItem("projectName")));
    if (!localStorage.getItem("projectName")) {
      setProjectName("projectName");
    } else {
      setProjectName("");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projectName", JSON.stringify(projectName));
  }, [projectName]);

  const onRequestOpen = () => {
    setModalIsOpen(true);
  };
  const onRequesClose = () => {
    setModalIsOpen(false);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setProjectName(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("project name created: " + projectName);
    event.preventDefault();
    setProjectName("");
  };

  const isEnabled = projectName.length > 3;

  return (
    <div className="maincontent">
      <button onClick={onRequestOpen}>Open modal</button>
      <Modal isOpen={modalIsOpen}>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <h2 text-align="center">Add Delivery Portal</h2>

            <label>Project Name:</label>
            <input value={projectName} type="text" onChange={onChange} />
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
      </Modal>
    </div>
  );
};
export default AddProject;
