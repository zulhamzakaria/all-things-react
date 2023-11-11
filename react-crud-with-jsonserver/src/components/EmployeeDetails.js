import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const EmployeeDetails = () => {
  const { empId } = useParams();
  const [employeeDetails, setEmployeeDetails] = useState({});
  console.log("http://localhost:30001/employee/" + empId);
  useEffect(() => {
    fetch("http://localhost:30001/employee/" + empId)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setEmployeeDetails(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee's Details</h2>
          <div className="card-body" />
          {employeeDetails && (
            <div>
              <h1>Name: {employeeDetails.name}</h1>
              <h2>Email: {employeeDetails.email}</h2>
              <Link className="btn btn-primary" to="/">Back to Listing</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default EmployeeDetails;
