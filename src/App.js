
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerList from "./components/Customer/CustomerList/CustomerList";
import CustomerForm from "./components/Customer/CustomerForm/CustomerForm";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import User from "./components/User/UserList";
import UserForm from "./components/User/UserForm/UserForm";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<CustomerList />} />
          <Route path="/users" element={<User />} />
          <Route path="/userform" element={<UserForm />} />
          <Route path="/form" element={<CustomerForm />} />
          <Route path="/form/:customerName" element={<CustomerForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
