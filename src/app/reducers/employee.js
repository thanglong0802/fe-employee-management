const initialState = {
  employees: [],
  updateEmployee: {},
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_EMPLOYEE": {
      return {
        ...state,
        employees: action.payload,
      };
    }
    case "ADD_EMPLOYEE": {
      const newList = [...state.employees];
      newList.push(action.payload);
      return {
        ...state,
        employees: newList,
      };
    }
    case "REMOVE_EMPLOYEE": {
      const newList = [...state.employees];
      const deleteEmployee = newList.filter(
        (employee) => !(employee.id === action.payload)
      );
      return {
        ...state,
        employees: deleteEmployee,
      };
    }
    case "GET_EMPLOYEE_BY_ID": {
      return {
        ...state,
        updateEmployee: action.payload,
      };
    }
    case "UPDATE_EMPLOYEE": {
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    }
    default:
      return state;
  }
};

export default employeeReducer;
