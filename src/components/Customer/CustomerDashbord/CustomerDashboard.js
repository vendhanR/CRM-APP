import React from "react";
import './CustomerDashboard.css'

const CustomerDashboard = (props) => {
  console.log(props.count.rejected);

  const { newCount, accepted, rejected, all } = props.count;

  return (
    <div className="d-flex justify-content-around align-content-between flex-wrap p-2">
      <div className="customer-dashboard total">
        <h6>Toatal <br />Customers</h6>
        {all}
      </div>
      <div className="customer-dashboard new">
        <h6>New <br /> Customers</h6>
        {newCount}
      </div>
      <div className="customer-dashboard accepted">
        <h6>Accepted <br /> Customers</h6>
        {accepted}
      </div>
      <div className="customer-dashboard rejected">
        <h6>Rejected <br /> Customers</h6>
       {rejected} 
      </div>
    </div>
  );
};

export default CustomerDashboard;
