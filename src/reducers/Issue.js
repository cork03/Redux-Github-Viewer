import { ADD_LIST } from "../actions/Index";

const initialData = {
  1: {
    id: 1,
    title: "A bug in Top Page",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    creator: "",
  },
  2: {
    id: 2,
    title: "A problem of performance in Top Page",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Open",
    creator: "",
  },
  3: {
    id: 3,
    title: "fix layout",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Close",
    creator: "",
  },
};

const initialState = {
  index: Object.values(initialData).length,
  data: initialData,
};

const issue = (state = initialState, action) => {
  let newState = { ...state };
  const { title, content } = action.payload || {};
  switch (action.type) {
    case ADD_LIST:
      newState.index++;
      newState.data[newState.index] = {
        id: newState.index,
        title,
        content,
        status: "Open",
        creator: "jjoo",
      };
      return newState;
    default:
      return state;
  }
};
export default issue;
