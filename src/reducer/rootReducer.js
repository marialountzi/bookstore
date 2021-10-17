import { BOOKS_REQ, CREATE } from "./types";
import { books } from "../sampleData/books.json";
const initialState = {
  results: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_REQ:
      return { ...state, results: books };
    case CREATE:
      return { ...state, results: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
