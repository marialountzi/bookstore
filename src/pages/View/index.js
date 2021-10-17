import { Grid, Typography, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { BooksReq } from "../../reducer/action";
import { useHistory } from "react-router-dom";
const ViewBook = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const id = history.location.pathname.split("/")[2];
  const result = useSelector((state) => state.rootReducer.results);
  let sample = {};
  if (Object.keys(result).length > 0) {
    sample = result.find((book) => book.isbn === id);
  }

  useEffect(() => {
    dispatch(BooksReq());
  }, [dispatch]);
  console.log(result);
  return (
    <React.Fragment>
      <Container sx={6}>
        <Box sx={{ margin: 2 }} />
        <Container maxWidth="md" style={{ border: "1px solid grey" }}>
          <Grid container item sx={{ justifyContent: "center" }}>
            <Typography gutterBottom variant="h4">
              {sample.title}
              <Divider />
            </Typography>

            <Grid container item sx={{ justifyContent: "center" }}>
              <Typography gutterBottom variant="h6" color="text.secondary">
                {sample.author}
                <Divider />
              </Typography>
            </Grid>

            <Grid container item sx={{ justifyContent: "center" }}>
              <Typography gutterBottom sx={{}}>
                Publisher: {sample.publisher}
                <Divider />
              </Typography>
            </Grid>
            <Grid container item sx={{ justifyContent: "center" }}>
              <Typography gutterBottom sx={{}}>
                Year: {sample.published}
                <Divider />
              </Typography>
            </Grid>
            <Grid container item sx={{ justifyContent: "center" }}>
              <Typography gutterBottom sx={{}}>
                Number of Pages: {sample.pages}
                <Divider />
              </Typography>
            </Grid>
            <Grid container item sx={{ justifyContent: "center" }}>
              <Typography gutterBottom sx={{}}>
                ISBN: {sample.isbn}
                <Divider />
              </Typography>
            </Grid>

            <Grid container item sx={{ justifyContent: "center" }}>
              <Button variant="outlined">Favorite</Button>
              <Button variant="outlined">Share</Button>
            </Grid>
            <Button variant="outlined">BUY</Button>
          </Grid>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default ViewBook;
