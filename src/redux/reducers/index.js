import { combineReducers } from "redux";
import entries from "./entries";

const mainReducers = combineReducers({
  entriesReducer: entries,
});

export default mainReducers;
