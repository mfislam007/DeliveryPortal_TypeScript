import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./AddProject.css";

const AddProject: React.FC = (): JSX.Element => {
  const [projectName, setProjectName] = useState("");

  useEffect(() => {
    setProjectName(localStorage.getItem("projectName"));
  }, []);

  useEffect(() => {
    localStorage.setItem("projectName", projectName);
  }, [projectName]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setProjectName(e.currentTarget.value);
  };
  return (
    <div>
      <Modal isOpen={true}>
        <div className="content">
          <h1>Create Delivery Portal</h1>
          <label>Project Name</label>
          <input value={projectName} type="text" onChange={onChange}></input>
        </div>
        <div>
          <button className="button"> Cancel</button>
          <button className="button">Create</button>
        </div>
      </Modal>
    </div>
  );
};
export default AddProject;
