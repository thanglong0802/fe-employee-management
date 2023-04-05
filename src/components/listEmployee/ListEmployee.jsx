import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployee,
  getEmployeeById,
  removeEmployee,
} from "../../app/actions/employee";
import { Link } from "react-router-dom";

import "./css/style.css";

function ListEmployee() {
  const employee = useSelector((state) => state.employee.employees);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee());
  }, []);

  const handleDeleteClick = (id) => {
    const rs = window.confirm(`Xác nhận xóa`);
    if (rs === true) {
      dispatch(removeEmployee(id));
    } else {
      return;
    }
  };

  const handleUpdateClick = (id) => {
    dispatch(getEmployeeById(id));
  };

  return (
    <div>
      <h2 className="text-center">Employee List</h2>
      <div>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((empl) => (
              <tr key={empl.id}>
                <td>{empl.firstName}</td>
                <td>{empl.lastName}</td>
                <td>{empl.emailId}</td>
                <td className="td-button">
                  <button
                    className="btn btn-info"
                    onClick={() => handleUpdateClick(empl.id)}
                  >
                    <Link to={`/employees/${empl.id}`} className="link-update">
                      Update
                    </Link>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteClick(empl.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployee;
