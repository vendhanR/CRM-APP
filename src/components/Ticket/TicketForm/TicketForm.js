import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from 'react-router-dom';

const TicketForm = () => {
  const [newTicket, setNewTicket] = useState([]);
    const navigate = useNavigate()
  const handleSubmit = () => {
    console.log(newTicket)
    fetch("http://localhost:4000/api/ticket", {
      method: "POST",
      body: JSON.stringify(newTicket),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => navigate("/tickets"))
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-3">
          <label className="form-label" htmlFor="customer">
            Customer
          </label>
          <input
            type="text"
            id="customer"
            className="form-control"
            onInput={(e) =>
              setNewTicket({ ...newTicket, customer: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="description">
            description
          </label>
          <input
            type="text"
            id="description"
            className="form-control"
            onInput={(e) =>
              setNewTicket({ ...newTicket, desc: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="AsigndTo">
            Asignd To
          </label>
          <input
            type="text"
            id="AsigndTo"
            className="form-control"
            onInput={(e) =>
              setNewTicket({ ...newTicket, assignedTo: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="RaisedOn">
            Raised On
          </label>
            {/*us   e moment libray for change ine date formet to another */}
          <input
            type="date"
            id="RaisedOn"
            className="form-control"
            onInput={(e) =>
              setNewTicket({ ...newTicket, raisedOn: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="status">
            status
          </label>
          <input
            type="text"
            id="status"
            className="form-control"
            onInput={(e) =>
              setNewTicket({ ...newTicket, status: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <button onClick={() => handleSubmit()}>ticket</button>
        </div>
      </div>
    </>
  );
};

export default TicketForm;
