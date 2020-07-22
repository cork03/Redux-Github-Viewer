export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

export const addList = (list) => {
  return { type: "ADD_LIST", payload: list };
};
export const removeList = (list) => {
  return { type: "REMOVE_LIST", payload: list };
};

export const actionCreators = {
  addList,
  removeList,
};
