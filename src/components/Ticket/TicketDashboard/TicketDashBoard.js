import React from "react";
import './TicketDashBoard.css'

const TicketDashBoard = ({countObj}) => {
  const { statusNew, assignedTo,resolved,inProgress , totalTicket} = countObj;
  console.log(assignedTo)
  return (
    <div className="container">
      <div className="d-flex justify-content-around align-content-between flex-wrap p-2">
        <div
          className="ticket-dashboard tickets"
        >
          <h5>Tickets</h5>
          <hr />
          <p className="ms-auto">{totalTicket}</p>
        </div>
        <div
          className="ticket-dashboard new"
        >
          <h5>New</h5>
          <hr />
          <p className="ms-auto">{statusNew}</p>
        </div>
        <div
          className="ticket-dashboard assigned"
        >
          <h5>Assigned</h5>
          <hr />
          <p className="ms-auto">{assignedTo}</p>
        </div>
        <div
          className="ticket-dashboard resolved"
        >
          <h5>Resolved</h5>
          <hr />
          <p className="ms-auto">{resolved}</p>
        </div>
        <div
          className="ticket-dashboard in-progress"
        >
          <h5>In Progress</h5>
          <hr />
          <p className="ms-auto">{inProgress}</p>
        </div>
      </div>
    </div>
  );
};

export default TicketDashBoard;
