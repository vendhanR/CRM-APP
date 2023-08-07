import React, { useEffect, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isLogged, setLogged] = useState(false);
  const [visible, setVisible] = useState(false);

  const ifUserLogged = localStorage.getItem("user");
  useEffect(() => {
    if (ifUserLogged && ifUserLogged === "true") {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  return (
    <nav className="mb-3">
      <div className="card flex justify-content-center">
        <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <ul className="sidebar-list">
          <li className="nav-item sidebar-item">
            <Link className="nav-link active" to={"/"}>
              Customers
            </Link>
          </li>
          <li className="nav-item sidebar-item">
            <Link className="nav-link active" to={"/users"}>
              Users
            </Link>
          </li>
          <li className="nav-item sidebar-item">
            <Link className="nav-link active" to={"/tickets"}>
              ticket
            </Link>
          </li>
        </ul>
        </Sidebar>
      </div>

      <ul className="nav justify-content-around align-items-center">
        <ul className="sidebar">
          <li className="nav-item">
            <Button icon="pi pi-align-justify" onClick={() => setVisible(true)} />
          </li>
        </ul>

        <ul className="d-flex nav-list">
          <li className="nav-item">
            <Link className="nav-link active" to={"/"}>
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to={"/users"}>
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to={"/tickets"}>
              ticket
            </Link>
          </li>
        </ul>
        <ul>
          {isLogged ? (
            <li className="nav-item">
              <Link
                className="nav-link active"
                onClick={() => localStorage.removeItem("user")}
                to={"/signup"}
              >
                <button className="btn  btn-primary">Logout</button>
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link active" to={"/signup"}>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  login
                </Link>
              </li>
            </>
          )}
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
