import React from "react";
import Card from "./Card";
import { Grid } from "@mui/material";
import "../../sampleData/books.json";
const SearchList = ({ books }) => {
  return (
    <Grid container item xs={12}>
      {books &&
        books.length > 0 &&
        books.map((book) => {
          return <Card key={book.isbn} book={book} />;
        })}
    </Grid>
  );
};

export default SearchList;
