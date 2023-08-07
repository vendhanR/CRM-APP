import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import './UserList.css'

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
        <button className="btn-add-user mb-3" onClick={() => navigate("/userform")}>
          Add User
        </button>
        <table>
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
                  <td scope="row">{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {!user.isActive && (
                      <button className="btn-active" onClick={() => activateUser(user.username)}>active</button>
                    )}
                    {user.isActive && (
                      <button className="btn-deActive"  onClick={() => deActivateUser(user.username)}>de - active</button>
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
