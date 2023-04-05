const initialState = {
  employees: [],
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
      const newList = [...state.employees];
      const filterEmployee = newList.filter(
        (empl) => empl.id === action.payload
      );
      return {
        ...state,
        employees: filterEmployee,
      };
    }
    default:
      return state;
  }
};

export default employeeReducer;
