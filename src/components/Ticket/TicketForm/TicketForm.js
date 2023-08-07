import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import "./TicketForm.css";

const TicketForm = () => {
  const [newTicket, setNewTicket] = useState([]);
  const [users, setUsers] = useState([]);
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();
  const { tickDesc } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/api/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("http://localhost:4000/api/customer")
      .then((res) => res.json())
      .then((data) => setCustomers(data));

    if (tickDesc) {
      fetch("http://localhost:4000/api/ticket/" + tickDesc)
        .then((res) => res.json())
        .then((data) => setNewTicket(data));
    }
  }, []);

  const handleSubmit = () => {
    console.log(newTicket);
    fetch("http://localhost:4000/api/ticket", {
      method: tickDesc ? "PUT" : "POST",
      body: JSON.stringify(newTicket),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate("/tickets"))
      .catch((err) => console.log(err));
  };

  const statusObj = [
    { status: "new" },
    { status: "Assigned" },
    { status: "Resolved" },
    { status: "In Progress" },
  ];

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-3">
          <label className="form-label" htmlFor="customer">
            Customer Name
          </label>

          <Dropdown
            disabled={tickDesc}
            value={customers.find((c) => c.name == newTicket.customer)}
            onChange={(e) =>
              setNewTicket({ ...newTicket, customer: e.value.name })
            }
            options={customers}
            optionLabel="name"
            filter
            placeholder="select customer..."
            className="form-control p-0"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            description
          </label>
          <input
            value={newTicket.desc}
            type="text"
            id="description"
            className="form-control"
            onInput={(e) =>
              setNewTicket({ ...newTicket, desc: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="assignedTo">
            Asigned To
          </label>
          <Dropdown
            value={users.find((u) => u.name === newTicket.assignedTo)}
            onChange={(e) =>
              setNewTicket({ ...newTicket, assignedTo: e.value.name })
            }
            options={users}
            optionLabel="name"
            className="form-control p-0"
            placeholder="assiged to"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="status">
            status
          </label>
          <Dropdown
          value={statusObj.find((s) => s.status === newTicket.status)}
            onChange={(e) =>
              setNewTicket({ ...newTicket, status: e.value.status })
            }
            placeholder="select one"
            optionLabel="status"
            options={statusObj}
            className="form-control p-0"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="raisedOn">
            Raised On
          </label>
          <input
            disabled={tickDesc}
            value={newTicket.raisedOn}
            type="date"
            id="raisedOn"
            className="form-control"
            onInput={(e) =>
              setNewTicket({ ...newTicket, raisedOn: e.target.value })
            }
          />
        </div>
        <div className="mb-3 d-flex justify-content-end">
          <button className="btn btn-success" onClick={() => handleSubmit()}>
            create ticket
          </button>
        </div>
      </div>
    </>
  );
};

export default TicketForm;
