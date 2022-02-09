import * as CONST from "../types";

const initialState = {
  homeEntries: [],
  searchEntries: [],
};

const entries = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CONST.SET_HOME_ENTRIES:
      return {
        ...state,
        homeEntries: payload,
      };
    case CONST.SET_SEARCH_ENTRIES:
      return {
        ...state,
        searchEntries: payload,
      };
    default:
      return state;
  }
};

export default entries;
