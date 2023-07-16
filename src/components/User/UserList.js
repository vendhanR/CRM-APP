import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/user")
      .then((res) => res.json())
      .then((data) =>{
         console.log(data)
        setUsers(data)
        });
  },[]); 
  
  console.log(users.name)

  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className="container">
      <button className="btn btn-info" onClick={() => navigate("/userform") }>Add User</button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">username</th>
              <th scope="col">email</th>
              <th scope="col">isActive</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user) => {
                return(
              <tr>
                <th scope="row">{user.name}</th>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.isActive ? "Yes" : "No"}</td>
              </tr>
                )
              })
            }
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
