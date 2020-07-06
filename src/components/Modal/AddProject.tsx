import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./AddProject.css";

const AddProject: React.FC = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    setProjectName(localStorage.getItem("projectName"));
  }, []);

  useEffect(() => {
    localStorage.setItem("projectName", projectName);
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

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    alert("project name created: " + projectName);
    event.preventDefault();
  };

  const enabled = projectName.length > 3;

  return (
    <div className="maincontent">
      <button onClick={onRequestOpen}>Open modal</button>
      <Modal isOpen={modalIsOpen}>
        <form onSubmit={handleSubmit}>
          <div className="content">
            <h2>Create Delivery Portal</h2>

            <label>Project Name:</label>
            <input value={projectName} type="text" minLength="3" onChange={onChange} />
          </div>
          <div>
            <button className="button" onClick={onRequesClose}>
              Cancel
            </button>
            <button className="button" type="submit" disabled={!enabled}>
              Create
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default AddProject;
