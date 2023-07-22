import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const CustomerForm = () => {
  const [newCustomer, setNewCustomer] = useState({});

  const navigate = useNavigate();
  const { customerName } = useParams();

  useEffect(() => {
    if (customerName) {
      console.log(customerName);
      fetch("http://localhost:4000/api/customer/" + customerName)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setNewCustomer(data);
        });
    }
  }, []);

  function handleFormSubmit() {
    fetch("http://localhost:4000/api/customer", {
      method: customerName ? "PUT" : "POST",
      body: JSON.stringify(newCustomer),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/"));
  }

  return (
    <>
      <div>
        <Navbar />
        <div className="container d-flex flex-column min-vh-100 justify-content-center">
          <div className="mb-3">
            <label htmlFor="inputName" className="form-label ms-start">
              Name
            </label>
            <input
              // readOnly={customerName ? "true" : "false"}
              value={newCustomer.name}
              type="text"
              className="form-control"
              id="inputName"
              onInput={(e) => {
                // newCustomer.name = e.target.value;
                setNewCustomer({ ...newCustomer, name: e.target.value });
              }}
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="inputWebsite" className="form-label">
              website
            </label>
            <input
              value={newCustomer.website}
              type="text"
              className="form-control"
              id="inputWebsite"
              onChange={(e) => {
                //newCustomer.website = e.target.value;
                setNewCustomer({...newCustomer, website: e.target.value });
              }}
            />
          </div> */}
          <div className="mb-3">
            <label htmlFor="InputTurnover" className="form-label ms-start">
              Turnover
            </label>
            <input
              value={newCustomer.turnover}
              type="text"
              className="form-control"
              id="InputTurnover"
              onChange={(e) => {
                setNewCustomer({ ...newCustomer, turnover: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputEmployees" className="form-label">
              No of employees
            </label>
            <input
              value={newCustomer.employees}
              type="text"
              className="form-control"
              id="InputEmployees"
              onChange={(e) => {
                setNewCustomer({ ...newCustomer, employees: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputCEO" className="form-label ms-start">
              CEO
            </label>
            <input
              value={newCustomer.ceo}
              type="text"
              className="form-control"
              id="inputCEO"
              onChange={(e) => {
                setNewCustomer({ ...newCustomer, ceo: e.target.value });
              }}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlfor="Status">
              Status
            </label>
            <select
              className="form-select"
              id="Status"
              onChange={(e) => {
                setNewCustomer({ ...newCustomer, status: e.target.value });
              }}
              value={newCustomer.status}
            >
              <option selected>Choose...</option>
              <option value="New">New</option>
              <option value="Rejected">Rejected</option>
              <option value="Accepted">Accepted</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="inputEstablished" className="form-label">
              Established in
            </label>
            <input
              value={newCustomer.year}
              type="text"
              className="form-control"
              id="inputEstablished"
              onChange={(e) => {
                setNewCustomer({ ...newCustomer, year: e.target.value });
              }}
            />
          </div>
          <button onClick={handleFormSubmit}>
            {customerName ? "update Customer" : "creat new Customer"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomerForm;
