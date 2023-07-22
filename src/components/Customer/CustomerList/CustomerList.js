import React, { useEffect, useState } from "react";
import "./CustomerList.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import CustomerDashbord from "../CustomerDashbord/CustomerDashbord";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [count, setCounts] = useState({});
  const [pages, setPages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    pageLoad(1)
  }, []);

  function pageLoad(pageNo) {
    console.log(pageNo)
    try {
      fetch(`http://localhost:4000/api/customer/page/${pageNo}`)
        .then((res) => res.json())
        .then((data) => {
          setCustomers(data.records);
          setFilteredCustomers(data.records);
          console.log(data)
          let newCount = data.records.filter((c) => c.status === "New").length;
          let acceptedCount = data.records.filter(
            (c) => c.status === "Accepted"
          ).length;
          let rejectedCount = data.records.filter(
            (c) => c.status === "Rejected"
          ).length;

          const countObj = {
            newCount: newCount,
            accepted: acceptedCount,
            rejected: rejectedCount,
            all: data.records.length,
          };

          setCounts(countObj);

          let totalPages = Math.floor(data.totalCount / 100);
          let arrayOfObject = new Array(totalPages).fill(0);
          setPages(arrayOfObject);
        
        });
    } catch (error) {
      console.log("There was an error", error);
    }
  }

  function deleteData(dataleItem) {
    fetch(`http://localhost:4000/api/customer/${dataleItem}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setFilteredCustomers(data));
  }

  const getBackroundColor = (status) => {
    if (status === "New") {
      return "bg-primary text-white";
    } else if (status === "Rejected") {
      return "bg-danger text-white";
    } else {
      return "bg-success text-white";
    }
  };

  function handleSearch(key) {
    if (!key || key.length === 0) {
      setFilteredCustomers(customers);
    } else {
      const result = customers.filter((c) =>
        c.name.includes(key.toUpperCase())
      );
      console.log(result);
      setFilteredCustomers([...result]);
      console.log(filteredCustomers);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container  ">
        <CustomerDashbord count={count} />
        <div className=" d-flex justify-content-start mb-4">
          <div className=" d-flex justify-content-between w-100">
            <div>
              <button
                className="btn btn-success"
                onClick={() => navigate("customerform")}
              >
                new Customer
              </button>
            </div>
            <div className="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  onInput={(e) => handleSearch(e.target.value)}
                />
                <span className="input-group-text" onClick={() => handleSearch()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        {!filteredCustomers || filteredCustomers.length === 0 ? (
          <div className="alert alert-danger m-3" role="alert">
            Thers is no cutomers!
          </div>
        ) : (
          <div className="customerList-container">
            <table className="table table-hover" id="customerTable">
              <thead>
                <tr className="table-primary">
                  <th>Name</th>
                  <th>CEO</th>
                  <th>Turnover</th>
                  <th>Employee</th>
                  <th>year</th>
                  <th>status</th>
                  <th>Update</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => {
                  return (
                    <tr key={customer._id}>
                      <td>{customer.name}</td>
                      <td>{customer.ceo}</td>
                      <td>{customer.turnover}</td>
                      <td className={getBackroundColor(customer.status)}>
                        {customer.status}
                      </td>
                      <td>{customer.employees}</td>
                      <td>{customer.year}</td>
                      <td>
                        <button
                          onClick={() => navigate("/form/" + customer.name)}
                          className="btn btn-warning"
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => deleteData(customer.name)}
                          className="btn btn-danger"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link"onClick={() => pageLoad(1)} aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>

                {pages.map((page, index) => {
                  return (
                    <>
                    <li className="page-item" key={index}>
                      <button className="page-link" onClick={() => pageLoad(index+1)}>
                        {index+1}
                      </button>
                    </li>
                    </>
                  );
                })}
                <li className="page-item">
                  <button className="page-link"onClick={() => pageLoad(+1)} aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
                </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomerList;
