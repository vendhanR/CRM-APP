import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./TicketList.css";
import TicketDashBoard from "../TicketDashboard/TicketDashBoard";

const TicketList = () => {
  const [ticketList, setTicketList] = useState([]);
  const [filterTickets, setfilterTickets] = useState([]);
  const [countObj, setCountObj] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:4000/api/ticket")
      .then((res) => res.json())
      .then((data) => {
        setTicketList(data);
        setfilterTickets(data);

        const statusNew = data.filter((n) => n.status === "new").length;
        const assignedTo = data.filter((n) => n.status === "Assigned").length;
        const resolved = data.filter((n) => n.status === "Resolved").length;
        const inProgress = data.filter(
          (n) => n.status === "In Progress"
        ).length;
        setCountObj({
          statusNew: statusNew,
          assignedTo: assignedTo,
          resolved: resolved,
          inProgress: inProgress,
          totalTicket: data.length,
        });
      });
  }, []);

  console.log(countObj);
  const handleSearch = (key) => {
    if (!key || key.length === 0) {
      setfilterTickets(ticketList);
    } else {
      const result = ticketList.filter((t) => t.desc.includes(key.trim()));
      setfilterTickets(result);
    }
  };

  const getBackroundColor = (status) => {
    if (status === "new") {
      return "bg-success border-bottom text-white";
    } else if (status === "Resolved") {
      return "bg-secondary border-bottom text-white";
    } else if (status === "Assigned") {
      return "bg-primary border-bottom text-white";
    } else {
      return "bg-info border-bottom text-white";
    }
  };
  return (
    <>
      <Navbar />
      <TicketDashBoard countObj={countObj} />
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center w-100 my-3">
          <div>
            <button
              className="btn-create-ticket"
              onClick={() => navigate("/ticketform")}
            >
              New Ticket
            </button>
          </div>
         
            <div className="ticket-search-container d-flex align-items-center">
              <input
                className="input-search"
                placeholder="Search..."
                onInput={(e) => handleSearch(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="22"
                fill="currentColor"
                className="bi bi-search pb-1"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">customer</th>
              <th scope="col">description</th>
              <th scope="col">assignedTo</th>
              <th scope="col">status</th>
              <th scope="col">raisedOn</th>
              <th scope="col">update</th>
            </tr>
          </thead>
          <tbody>
            {filterTickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.customer}</td>
                <td>{ticket.desc}</td>
                <td>{ticket.assignedTo}</td>
                <td className={getBackroundColor(ticket.status)}>
                  {ticket.status}
                </td>
                <td>{ticket.raisedOn}</td>
                <td>
                  <button
                    onClick={() => navigate("/ticketform/" + ticket.desc)}
                    className="btn btn-primary"
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TicketList;
