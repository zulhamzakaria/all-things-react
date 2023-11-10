import {Link} from "react-router-dom"

const EmployeeCreate = () => {
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="container">
            <div className="card" style={{"text-align":"l"}}>
              <div className="card-title">
                <h2>Create Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Id</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input className="form-control"></input>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input"></input>
                      <label className="formm-check-label">Is Active</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary m-1">Save</button>
                        <Link to="/" className="btn btn-danger ">Back</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeCreate;
