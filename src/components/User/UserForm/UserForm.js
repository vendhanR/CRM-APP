import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [newUser, setNewUSer] = useState({});
  const navigate = useNavigate();
  const AddNewUser = () => {
    console.log(newUser);
    // fetch('http://localhost:4000/api/user/signin',{
    //     method : "POST",
    //     body: JSON.stringify(newUser),
    //     headers : {
    //         "Content-Type": "application/json",
    //     }
    // }) .then(res => {
    //     console.log(res);
    //     navigate("/user")
    // }
    // )

    fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (res.status === 400) {
          console.log("400");
        } else if (res.status === 200) {
          navigate("/users");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="form">

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Enter Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onInput={(e) => {
                setNewUSer({ ...newUser, name: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onInput={(e) => {
                setNewUSer({ ...newUser, username: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onInput={(e) => {
                setNewUSer({ ...newUser, email: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onInput={(e) => {
                setNewUSer({ ...newUser, password: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            IsActive
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="IsActive"
                id="yes"
                value={"true"}
                onClick={(e) => {
                  setNewUSer({ ...newUser, isActive: e.target.value });
                }}
              />
              <label className="form-check-label" htmlfor="yes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="IsActive"
                id="no"
                value={"false"}
                onClick={(e) => {
                  setNewUSer({ ...newUser, isActive: e.target.value });
                }}
              />
              <label className="form-check-label" htmlfor="no">
                No
              </label>
            </div>
          </div>

          <button className="btn btn-success float-end" onClick={AddNewUser}>
            Add user
          </button>

        </div>
      </div>
    </>
  );
};

export default UserForm;
