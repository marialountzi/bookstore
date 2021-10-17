import { Typography, Grid, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Card({ book }) {
  return (
    <>
      {book && (
        <Grid item xs={3}>
          <Paper
            sx={{
              height: 100,
              width: 200,
              mt: 10,
              ml: 15,
              border: "1px solid grey",
              textAlign: "center",
            }}
          >
            <Typography>{book.author}</Typography>
            <Link to={`/book/${book.isbn}`}>
              <Typography>{book.isbn}</Typography>
            </Link>
          </Paper>
        </Grid>
      )}
    </>
  );
}

export default Card;
