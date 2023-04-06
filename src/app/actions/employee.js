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

export const remove = (id) => {
  return {
    type: "REMOVE_EMPLOYEE",
    payload: id,
  };
};

export const getById = (objectId) => {
  return {
    type: "GET_EMPLOYEE_BY_ID",
    payload: objectId,
  };
};

export const update = (employee) => {
  return {
    type: "UPDATE_EMPLOYEE",
    payload: employee,
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

export const removeEmployee = (id) => {
  const fetchRemove = async (dispatch) => {
    try {
      await api.delete(`employees/${id}`);
      dispatch(remove(id));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchRemove;
};

export const getEmployeeById = (id) => {
  const fetchGetById = async (dispatch) => {
    try {
      let response = await api.get(`employees/${id}`);
      console.log(response.data);
      dispatch(getById(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchGetById;
};

export const updateEmployee = (id, employee) => {
  const fetchUpdate = async (dispatch) => {
    try {
      await api.put(`/employees/${id}`, employee);
      console.log(employee);
      dispatch(update(employee));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchUpdate;
};
