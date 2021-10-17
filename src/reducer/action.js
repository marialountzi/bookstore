import { BOOKS_REQ, CREATE, VIEW } from "./types";

export const createNewBook = ({ payload }) => ({
  type: CREATE,
  payload,
});
export const ViewBookID = ({ payload }) => ({
  type: VIEW,
  payload,
});
export const BooksReq = () => ({
  type: BOOKS_REQ,
});
