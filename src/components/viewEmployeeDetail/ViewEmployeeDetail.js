import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEmployeeById } from "../../app/actions/employee";

function ViewEmployeeDetail() {
  const employee = useSelector((state) => state.employee.updateEmployee);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getEmployeeById(id));
  }, []);
  return (
    <div>
      <h2 className="text-center">Employee Detail</h2>
      <div
        style={{
          width: "100%",
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="card mb-3" style={{ width: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="..." alt="avatar" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">
                  {employee.firstName + " " + employee.lastName}
                </h5>
                <p className="card-text">
                  Thông tin liên hệ: {employee.emailId}
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployeeDetail;
