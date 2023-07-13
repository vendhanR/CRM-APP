import React, { useEffect, useState } from "react";
import "./CustomerList.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();
  if(localStorage.getItem("user") === null) {
    navigate("/login")
  }

  useEffect(() => {
    try {      
      fetch("http://localhost:4000/api/customer")
        .then((res) => res.json())
        .then((data) => setCustomers(data));
    } catch (error) {
      console.log("There was an error",error)
    }
  }, []);

  console.log(customers);

  function handleUpdate(customer){
    navigate("/form/" + customer)
  }

  function deleteData(dataleItem) {
    fetch(`http://localhost:4000/api/customer/${dataleItem}`,{
      method:"DELETE"
    }).then(res => res.json())
    .then(data => setCustomers(data))
  }
  
  return (
    <>
      <Navbar />
      <div className="container  ">
        <div className=" d-flex justify-content-start mb-4">
        <button className="btn btn-success" onClick={() => navigate("form")}>
          new Customer
        </button>
        </div>
        { !customers ? (
          <div class="alert alert-danger m-3" role="alert">
            Thers is no cutomers!
          </div>
        ) : (
          <div className="customerList-container">
            <table border={1}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>website</th>
                  <th>Turnover</th>
                  <th>noofEmployee</th>
                  <th>CEO</th>
                  <th>Established year</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, index) => {
                  return (
                    <tr key={index}>
                      <td>{customer._id}</td>
                      <td>{customer.name}</td>
                      <td>{customer.turnover}</td>
                      <td>{customer.employees}</td>
                      <td>{customer.ceo}</td>
                      <td>{customer.year}</td>
                      <td><button onClick={() => handleUpdate(customer.name)}>Update</button></td>
                      <td><button onClick={() => deleteData(customer.name)}>delete   </button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerList;
