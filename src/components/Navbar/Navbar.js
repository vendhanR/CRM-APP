import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isLogged, setLogged] = useState(false);
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
      <ul className="nav justify-content-around align-items-center bg-dark">
        <ul className="d-flex">
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
            <Link className="nav-link active" to={"/form"}>
              form
            </Link>
          </li>
        </ul>
        <ul>
          {isLogged ? (
            <li className="nav-item">
              <Link
                className="nav-link active"
                onClick={() => localStorage.removeItem("user")}
                to={"/login"}
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
