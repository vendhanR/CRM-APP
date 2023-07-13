import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isLogged, setLogged] = useState(false);
  const ifUserLogged = localStorage.getItem("user")
  useEffect(() => {
    if(ifUserLogged && ifUserLogged === "true") {
      setLogged(true)
    } else {
      setLogged(false)
    }
  },[])

  return (
    <nav className="mb-3">
      <ul className="nav justify-content-end bg-dark">
        {isLogged ? (
          <li className="nav-item">
            <Link className="nav-link active" onClick={() => localStorage.removeItem("user")} to={"/login"}>
              Logout
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
    </nav>
  );
};

export default Navbar;
