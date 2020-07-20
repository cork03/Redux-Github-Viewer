export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

export const addList = (list) => {
  return { type: "ADD_LIST", payroad: list };
};
export const removeList = (list) => {
  return { type: "RMOVE_LIST", payroad: list };
};

export const actionCreators = {
  addList,
  removeList,
};
