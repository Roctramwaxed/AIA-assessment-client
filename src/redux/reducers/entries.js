import * as type from "../types";

const initialState = {
  homeEntries: [],
  searchEntries: [],
};

const entries = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case type.SET_HOME_ENTRIES:
      return {
        ...state,
        entries: payload,
      };
    case type.SET_SEARCH_ENTRIES:
      return {
        ...state,
        entries: payload,
      };
    default:
      return state;
  }
};

export default entries;
