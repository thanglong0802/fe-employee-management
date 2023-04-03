// export const addEmployee = (employee) => {
//   return {
//     type: "ADD_EMPLOYEE",
//     payload: employee,
//   };
// };

import axios from "axios";

// export const removeEmployee = (employee) => {
//   return {
//     type: "REMOVE_EMPLOYEE",
//     payload: employee,
//   };
// };

export const getEmployeeSuccess = (emp) => {
  return {
    type: "GET_ALL_EMPLOYEE_SUCCESS",
    payload: emp,
  };
};

export const getEmployee = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:6789/api/v1/employees")
      .then((response) => {
        const users = response.data;
        dispatch(getEmployeeSuccess(users));
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
};
