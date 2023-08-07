import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerList from "./components/Customer/CustomerList/CustomerList";
import CustomerForm from "./components/Customer/CustomerForm/CustomerForm";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import User from "./components/User/UserList";
import UserForm from "./components/User/UserForm/UserForm";
import TicketList from "./components/Ticket/TicketList/TicketList";
import TicketForm from "./components/Ticket/TicketForm/TicketForm";
import SecuredRoutes from "./Util/SecuredRoutes/SecuredRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Login />} />

          <Route
            path="/"
            element={
              <SecuredRoutes>
                <CustomerList />
              </SecuredRoutes>
            }
          />
          <Route
            path="/customerform"
            element={
              <SecuredRoutes>
                <CustomerForm />
              </SecuredRoutes>
            }
          />
          <Route
            path="/form/:customerName"
            element={
              <SecuredRoutes>
                <CustomerForm />
              </SecuredRoutes>
            }
          />

          <Route
            path="/users"
            element={
              <SecuredRoutes>
                <User />
              </SecuredRoutes>
            }
          />
          <Route
            path="/userform"
            element={
              <SecuredRoutes>
                <UserForm />
              </SecuredRoutes>
            }
          />

          <Route
            path="tickets"
            element={
              <SecuredRoutes>
                <TicketList />
              </SecuredRoutes>
            }
          />
          <Route
            path="ticketform"
            element={
              <SecuredRoutes>
                <TicketForm />
              </SecuredRoutes>
            }
          />
          <Route
            path="ticketform/:tickDesc"
            element={
              <SecuredRoutes>
                <TicketForm />
              </SecuredRoutes>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
