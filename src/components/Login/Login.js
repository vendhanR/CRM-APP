import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [loginUser, setLoginUser] = useState({});
  const [invalidUSer , setInavlidUSer] = useState(false);
  const navigate = useNavigate();

  function handleLogin() {
    setInavlidUSer(false)
    fetch("http://localhost:4000/api/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    })
      .then((res) => {
        if(res.status === 400) {
            setInavlidUSer(true)
        } else if (res.status === 200) {
           localStorage.setItem("user", "true");
            navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="d-flex container">
        <div className="left d-flex  align-items-center justify-content-center">
          <img
          className="crm-img"
            src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg"
            alt="crm logo"
          />
        </div>
        <div className="right  d-flex  align-items-center justify-content-center">
          <div className="form">
          <h3 className="mb-3">Please Login</h3>
          {
            invalidUSer &&
                <div class="alert alert-danger m-3" role="alert">
                 Invalid Credentials
                </div>
          }
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onInput={(e) => {
                setLoginUser({ ...loginUser, email: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onInput={(e) => {
                setLoginUser({ ...loginUser, password: e.target.value });
              }}
            />
          </div>
          <button className="btn btn-success float-end" onClick={handleLogin}>
            login
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;