import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import SearchList from "./SearchList";
import { Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BooksReq } from "../../reducer/action";

const SearchBook = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.rootReducer.results);
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const handleInput = (event) => {
    setQuery(event.target.value);
    let temp;
    temp = books.map((book) => {
      if (book.isbn.includes(event.target.value)) {
        return book;
      }
    });
    temp = temp.filter(function (element) {
      return element !== undefined;
    });
    setData(temp);
  };

  useEffect(() => {
    dispatch(BooksReq());
  }, [dispatch]);
  return (
    <>
      <Grid container item sx={{ justifyContent: "center" }}>
        <Typography variant="h2">Search to find your new book</Typography>
      </Grid>
      <Grid container item sx={{ justifyContent: "center" }}>
        <Typography variant="h6" color="text.secondary">
          Use the filters below to srecify your search
        </Typography>
      </Grid>
      <Grid container item sx={{ justifyContent: "center" }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            onChange={handleInput}
            placeholder="Search a new book"
            inputProps={{ "aria-label": "Search a new book" }}
          />
          <IconButton
            disabled
            type="submit"
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {books && books.length > 0 && (
          <SearchList books={query ? data : books} />
        )}
      </Grid>
    </>
  );
};

export default SearchBook;
