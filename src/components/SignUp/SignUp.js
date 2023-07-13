import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [registerUser, setRegisterUser] = useState({});
  const navigate = useNavigate()

  function handleRegister() {
    fetch("http://localhost:4000/api/user/signup",{
        method: "POST",
        body : JSON.stringify(registerUser),
        headers : {
            "Content-Type": "application/json",
        }
    }).then((res) =>{
        console.log(res)
        navigate('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <div className="d-flex container">
        <div className="left d-flex  align-items-center justify-content-center">
          <img
            src="https://img.freepik.com/premium-vector/crm-icons-customer-relationship-management-vector-infographics-template_116137-3703.jpg"
            alt="crm logo"
          />
        </div>
        <div className="right  d-flex  align-items-center justify-content-center">
          <div className="form">
            <h3 className="mb-3">Please register to get started</h3>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Enter Your Name
              </label>
              <input type="text" className="form-control" id="name" onInput={(e) => {
                setRegisterUser({...registerUser , name : e.target.value})
              }} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" onInput={(e) => {
                setRegisterUser({...registerUser , email : e.target.value})
              }} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                password
              </label>
              <input type="password" className="form-control" id="password" onInput={(e) => {
                setRegisterUser({...registerUser , password : e.target.value})
              }}/>
            </div>
            <button className="btn btn-success float-end" onClick={handleRegister}>register</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
