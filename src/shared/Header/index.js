import React from "react";
import { Grid, Typography } from "@mui/material";
const Header = () => {
  return (
    <Grid container>
      <Grid
        container
        item
        xs={12}
        sx={{
          justifyContent: "center",
          border: "1px solid",
          bgcolor: "grey.500",
        }}
      >
        <Typography variant="h2">Bookstore</Typography>
      </Grid>
    </Grid>
  );
};

export default Header;
