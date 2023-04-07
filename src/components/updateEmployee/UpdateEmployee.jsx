import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getEmployeeById, updateEmployee } from "../../app/actions/employee";

function UpdateEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const employeeUpdate = useSelector((state) => state.employee.updateEmployee);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, []);

  useEffect(() => {
    setFirstName(employeeUpdate.firstName);
    setLastName(employeeUpdate.lastName);
    setEmailId(employeeUpdate.emailId);
  }, [employeeUpdate]);

  const handleUpdateEmployeeClick = (e) => {
    e.preventDefault();
    const info = {
      firstName,
      lastName,
      emailId,
    };
    debugger;
    dispatch(updateEmployee(id, info));
    setFirstName("");
    setLastName("");
    setEmailId("");
  };

  return (
    <div className="card col-md-6 offset-md-3 offsett-md-3">
      <h2 className="text-center">Update Employee</h2>
      <div>
        <form method="post">
          <div className="form-group row">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              First name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control first-name"
                id="inputEmail3"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Last name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control last-name"
                id="inputPassword3"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control email"
                id="inputPassword3"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleUpdateEmployeeClick}
              >
                Save
              </button>
              <button
                type=""
                className="btn btn-danger"
                style={{
                  marginLeft: "7px",
                }}
              >
                <Link
                  to={"/"}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  Cancel
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee;
