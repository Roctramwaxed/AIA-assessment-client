import { createStore } from "redux";
import mainReducers from "./reducers";

const store = createStore(
  mainReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
