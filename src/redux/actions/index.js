import * as type from "../types";

export const setHomeEntries = (payload) => {
  return {
    type: type.SET_HOME_ENTRIES,
    payload,
  };
};
