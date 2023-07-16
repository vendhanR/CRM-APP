import React, { useEffect, useState } from "react";
import "./CustomerList.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const navigate = useNavigate();

  
  useEffect(() => {
    if(localStorage.getItem("user") === null) {
      navigate("/login")
    }
    try {      
      fetch("http://localhost:4000/api/customer")
        .then((res) => res.json()).catch((e) => console.log(e))
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
            <table className="table">
              <thead>
                <tr className="table-primary">
                  <th>Name</th>
                  <th>CEO</th>
                  <th>Turnover</th>
                  <th>Employee</th>
                  <th>year</th>
                  <th>Update</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => {
                  return (
                    <tr key={customer._id}>
                      <td>{customer.name}</td>
                      <td>{customer.ceo}</td>
                      <td>{customer.turnover}</td>
                      <td>{customer.employees}</td>
                      <td>{customer.year}</td>
                      <td><button onClick={() => handleUpdate(customer.name)} className="btn btn-warning">Update</button></td>
                      <td><button onClick={() => deleteData(customer.name)} className="btn btn-danger">delete</button></td>
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
