import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Employee from "./components/employee/Employee";
import { useEffect } from "react";
import { getEmployee } from "./app/actions/employee";

function App() {
  const employee = useSelector((state) => state.employee.list);

  const dispatch = useDispatch();

  useEffect(() => {
    const action = getEmployee();
    console.log(action);
    dispatch(action);
  }, []);

  return (
    <div className="container">
      {/* <Employee /> */}
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
    </div>
  );
}

export default App;
