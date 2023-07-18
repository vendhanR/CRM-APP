import React from "react";

const CustomerDashbord = (props) => {
  console.log(props.count.rejected);

  const { newCount, accepted, rejected, all } = props.count;

  return (
    <div className="d-flex justify-content-around flex-wrap p-2 ">
      <div
        class="card p-2 bg-primary text-white"
        style={{ width: "8rem", height: "8rem" }}
      >
        <h5>Customers</h5>
        {all}
      </div>
      <div
        class="card p-2 bg-primary text-white"
        style={{ width: "8rem", height: "8rem" }}
      >
        <h5>New</h5>
        {newCount}
      </div>
      <div
        class="card p-2 bg-success text-white"
        style={{ width: "8rem", height: "8rem" }}
      >
        <h5>Accepted</h5>
        {accepted}
      </div>
      <div
        class="card p-2 bg-danger text-white"
        style={{ width: "8rem", height: "8rem" }}
      >
        <h5>Rejected</h5>
        {rejected}
      </div>
    </div>
  );
};

export default CustomerDashbord;
