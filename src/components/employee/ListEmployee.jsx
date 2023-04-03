import React from "react";

function ListEmployee() {
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
          <tbody>{}</tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployee;
