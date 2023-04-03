const initialState = {
  list: [],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "ADD_EMPLOYEE": {
    //   const newState = [...state.list];
    //   newState.push(action.payload);
    //   return {
    //     ...state,
    //     list: newState,
    //   };
    // }
    case "GET_ALL_EMPLOYEE_SUCCESS": {
      return {
        ...state,
        list: action.payload,
      };
    }
    default:
      return state;
  }
};

export default employeeReducer;
