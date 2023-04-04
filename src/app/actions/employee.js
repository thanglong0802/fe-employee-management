import api from "../../api/api";

export const getAll = (employee) => {
  return {
    type: "GET_ALL_EMPLOYEE",
    payload: employee,
  };
};

export const add = (newEmployee) => {
  return {
    type: "ADD_EMPLOYEE",
    payload: newEmployee,
  };
};

export const getEmployee = () => {
  // axios with promise
  // return (dispatch) => {
  //   api
  //     .get(`employees`)
  //     .then((response) => {
  //       const empl = response.data;
  //       dispatch(getAll(empl));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // axios with async await
  const fetchEmployee = async (dispatch) => {
    try {
      let response = await api.get(`employees`);
      dispatch(getAll(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchEmployee;
};

export const addEmployee = (data) => {
  const fetchAddEmployee = async (dispatch) => {
    try {
      let response = await api.post(`employees`, data);
      console.log(response.data);
      dispatch(add(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchAddEmployee;
};
