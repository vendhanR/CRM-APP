import React from "react";

const CustomerDashbord = (props) => {
  console.log(props.count.rejected);

  const { newCount, accepted, rejected, all } = props.count;

  return (
    <div className="d-flex justify-content-around flex-wrap p-2">
      <div
        className="card p-2 bg-dark text-white ml-2"
        style={{ width: "14rem", height: "8rem" }}
      >
        <h5>Customers</h5>
        {all}
      </div>
      <div
        className="card p-2 bg-primary text-white ml-2"
        style={{ width: "14rem", height: "8rem" }}
      >
        <h5>New</h5>
        {newCount}
      </div>
      <div
        className="card p-2 bg-success text-white ml-2"
        style={{ width: "14rem", height: "8rem" }}
      >
        <h5>Accepted</h5>
        {accepted}
      </div>
      <div
        className="card p-2 bg-danger text-white"
        style={{ width: "14rem", height: "8rem" }}
      >
        <h5>Rejected</h5>
        {rejected}
      </div>
    </div>
  );
};

export default CustomerDashbord;
