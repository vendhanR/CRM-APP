import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const TicketList = () => {
  const [ticketList, setTicketList] = useState([]);

  const navigate =  useNavigate()
  useEffect(() => {
    fetch("http://localhost:4000/api/ticket")
      .then((res) => res.json())
      .then((data) => setTicketList(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <button onClick={() => navigate("/ticketform")}>
            ticketform
        </button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">assignedTo</th>
              <th scope="col">customer</th>
              <th scope="col">description</th>
              <th scope="col">raisedOn</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
            {ticketList.map((ticket, index) => 
                
              <tr key={index}>
                <td>{ticket.assignedTo}</td>
                <td>{ticket.customer}</td>
                <td>{ticket.desc}</td>
                <td>{ticket.raisedOn}</td>
                <td>{ticket.status}</td>
              </tr>
                
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TicketList;
