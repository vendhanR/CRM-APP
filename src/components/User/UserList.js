import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const User = () => {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/api/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const deActivateUser = (userName) => {
    console.log(userName)
      fetch(`http://localhost:4000/api/user/deActivate/${userName}`,{
        method : "PUT"
      }) 
      .then((res => res.json()))
      .then(data => setUsers(data))
  }
  const activateUser = (userName) => {  
    console.log(userName)
      fetch(`http://localhost:4000/api/user/activate/${userName}`,{
        method : "PUT"
      }) 
      .then((res => res.json()))
      .then(data => setUsers(data))
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <button className="btn btn-info" onClick={() => navigate("/userform")}>
          Add User
        </button>
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
            {users.map((user,index) => {
              return (
                <tr key={index}>
                  <th scope="row">{user.name}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {!user.isActive && (
                      <button className="btn  btn-success" onClick={() => activateUser(user.username)}>active</button>
                    )}
                    {user.isActive && (
                      <button className="btn  btn-danger px-3"  onClick={() => deActivateUser(user.username)}>de - active</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
