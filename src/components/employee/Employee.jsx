// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addEmployee } from "../../app/actions/employee";
// import ListEmployee from "../listEmployee/ListEmployee";

// const randomNumber = () => {
//   return 1000 + Math.trunc(Math.random() * 9000);
// };

// function Employee() {
//   const emplyee = useSelector((state) => state.employee.list);
//   const dispatch = useDispatch();
//   console.log("emplyee: ", emplyee);

//   const handleAddEmployeeClick = () => {
//     const num = randomNumber();
//     // Random a employee object: first name + last name + email
//     const newEmployee = {
//       first_name: `First name ${num}`,
//       last_name: `Last name ${num}`,
//       email: `Email ${num}`,
//     };
//     // Dispatch action to add a new employee to redux store
//     const action = addEmployee(newEmployee);
//     dispatch(action);
//   };
//   return (
//     <div>
//       <button onClick={handleAddEmployeeClick}>Random Employee</button>
//       <ListEmployee emplyee={emplyee} />
//     </div>
//   );
// }

// export default Employee;
