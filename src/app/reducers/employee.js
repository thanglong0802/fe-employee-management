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
    default:
      return state;
  }
};

export default employeeReducer;
