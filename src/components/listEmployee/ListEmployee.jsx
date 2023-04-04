import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee } from "../../app/actions/employee";

function ListEmployee() {
  const employee = useSelector((state) => state.employee.employees);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee());
  }, [dispatch]);

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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployee;
