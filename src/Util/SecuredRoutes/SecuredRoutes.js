import React, { useEffect, useState } from "react";

const SecuredRoutes = (props) => {
  const [LoggedIn, setLogin] = useState(false);

  useEffect(() => {
    const isUserLogged = localStorage.getItem("user");
    if(!isUserLogged || isUserLogged!="true"){
        console.log("Not logged in");
        window.location.href="/signup";
    }else{
        setLogin(true);
    }
  },[]);
  return (
    <React.Fragment>
      {/* pops.childeren points to any child component which is render which has
      been added between opening and closing tag of the parent componet */}
      {LoggedIn && props.children}
    </React.Fragment>
  );
};

export default SecuredRoutes;
