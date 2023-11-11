import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeListing = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const navigate = useNavigate();

  const LoadDetails = (id) => {
    navigate("/employee/details/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const Remove = (id) => {
    if (window.confirm("Delete user?")) {
      fetch("http://localhost:30001/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:30001/employee")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setEmployeeData(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h2>EmployeeListing</h2>
        </div>
        <div className="card-body">
          <div className="mb-2">
            <Link to="employee/create" className="btn btn-success">
              Add New Employee
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {employeeData &&
                employeeData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success m-1"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Remove(item.id);
                        }}
                        className="btn btn-danger m-1"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetails(item.id);
                        }}
                        className="btn btn-success m-1"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default EmployeeListing;
