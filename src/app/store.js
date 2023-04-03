// reducers, init state = rootReducer, middlewares: redux-thunk - là một middlewares cho phép dispatch các actions không đồng bộ (asynchronous actions) trong redux. Khi sử dụng redux, các actions chỉ có thể trả về đối tượng plain JS và các actions này phải được xử lý đồng bộ (trong trường hợp call API từ server là trường hợp không đồng bộ nên cần sử dụng redux-thunk).

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/root";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
