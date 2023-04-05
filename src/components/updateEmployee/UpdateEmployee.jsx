import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function UpdateEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {});

  const handleUpdateEmployeeClick = (e) => {
    e.preventDefault();
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
                className="form-control"
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
                className="form-control"
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
                className="form-control"
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEmployee;
