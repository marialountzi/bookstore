import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import SearchBook from "./pages/Search";
import CreateBook from "./pages/Create";
import ViewBook from "./pages/View";
import Header from "./shared/Header";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <Grid>
      <Header />
      <BrowserRouter>
        <Route exact path="/" component={SearchBook} />
        <Route exact path="/book/:ID" component={ViewBook} />
        <Route exact path="/create" component={CreateBook} />
      </BrowserRouter>
    </Grid>
  );
};

export default App;
