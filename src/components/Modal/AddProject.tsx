import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./AddProject.css";

const AddProject: React.FC = (): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    setProjectName(JSON.parse(localStorage.getItem("projectName")));
    if (!localStorage.getItem("projectName")) {
      setProjectName("projectName");
    } else {
      setProjectName("");
    }
  }, []);

  useEffect(() => {
    setCustomerName(JSON.parse(localStorage.getItem("customerName")));
    if (!localStorage.getItem("customerName")) {
      setCustomerName("customerName");
    } else {
      setCustomerName("");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("projectName", JSON.stringify(projectName));
  }, [projectName]);

  useEffect(() => {
    localStorage.setItem("customerName", JSON.stringify(customerName));
  }, [customerName]);

  const onRequestOpen = () => {
    setModalIsOpen(true);
  };
  const onRequesClose = () => {
    setModalIsOpen(false);
  };

  const onChangeProject = (event: React.FormEvent<HTMLInputElement>) => {
    setProjectName(event.currentTarget.value);
  };

  const onChangeCustomer = (event: React.FormEvent<HTMLInputElement>) => {
    setCustomerName(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("project name: " + projectName + " and " + "customer name: " + customerName);
    setProjectName("");
    setCustomerName("");
    event.preventDefault();
  };

  const isEnabled = projectName.length > 3 && customerName.length > 3;

  return (
    <div className="maincontent">
      <button onClick={onRequestOpen}>Open modal</button>
      <Modal isOpen={modalIsOpen}>
        <form onSubmit={handleSubmit}>
          <div className="projectcontent">
            <h2 text-align="center">Add Delivery Portal</h2>

            <label>Project Name:</label>
            <input value={projectName} type="text" onChange={onChangeProject} />
          </div>
          <div className="customercontent">
            <label>Customer Name:</label>
            <input value={customerName} type="text" onChange={onChangeCustomer} />
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
