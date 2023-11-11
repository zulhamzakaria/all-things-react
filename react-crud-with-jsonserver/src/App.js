import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeListing from "./components/employeeList";
import EmployeeCreate from "./components/EmployeeCreate";

function App() {
  return (
    <div className="App">
      <h1>React Crud operation</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListing />} />
          <Route path="/employee/create" element={<EmployeeCreate />} />
          <Route path="/employee/details/:empId" element={<employeeDetails />} />
          <Route path="/employee/edit/:empId" element={<employeeEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
