import React from "react";
import * as yup from "yup";
import { Grid, Typography, TextField } from "@mui/material";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { createNewBook } from "../../reducer/action";
import { withStyles } from "@mui/styles";

const validationSchema = yup.object({
  title: yup
    .string("Enter title")
    .min(10)
    .max(120)
    .matches()
    .required("title is required"),
  description: yup
    .string("Enter description")
    .max(512, "description should be of minimum 8 characters length")
    .required("description is required")
    .matches(/^[A-Z]/),
  subtitle: yup
    .string("Enter subtitle")
    .required("subtitle is required")
    .matches(/^[^,]+(?:,[^,]+){0,3}$/),
  author: yup
    .string("Enter author")
    .required("author is required")
    .matches(/^([A-Z][-a-z]*(?:\s+[A-Z][a-z]*))?$/),
  publisher: yup
    .string("Enter publisher")
    .required("publisher is required")
    .min(5)
    .max(60),
  published: yup
    .string("Enter pages")
    .required("published is required")
    .matches(/^[0-9]{4}$/),
  pages: yup
    .string("Enter pages")
    .required("pages is required")
    .matches(/^[0-9]{0,4}$/),
  isbn: yup
    .string("Enter isbn ")
    .required("isbn is required")
    .matches(/^[0-9]{10}$/),
});

const styles = () => ({
  input: {
    height: 55,
  },
});

const CreateBook = withStyles(styles)((props) => {
  const { classes } = props;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      subtitle: "",
      author: "",
      publisher: "",
      published: "",
      pages: "",
      isbn: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(createNewBook({ payload: values }));
    },
  });

  return (
    <Grid container item xs={12}>
      <Grid
        container
        item
        xs={12}
        sx={{ display: "block", width: "auto", textAlign: "center" }}
      >
        <Typography variant={"h2"}> Add New Book</Typography>
      </Grid>
      <Grid container item xs={12} style={{ justifyContent: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              fullWidth
              id="title"
              name="title"
              label="title"
              InputProps={{
                className: classes.input,
              }}
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              fullWidth
              id="description"
              name="description"
              label="description"
              InputProps={{
                className: classes.input,
              }}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              fullWidth
              id="subtitle"
              name="subtitle"
              label="subtitle"
              InputProps={{
                className: classes.input,
              }}
              value={formik.values.subtitle}
              onChange={formik.handleChange}
              error={formik.touched.subtitle && Boolean(formik.errors.subtitle)}
              helperText={formik.touched.subtitle && formik.errors.subtitle}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              fullWidth
              id="author"
              name="author"
              label="author"
              InputProps={{
                className: classes.input,
              }}
              value={formik.values.author}
              onChange={formik.handleChange}
              error={formik.touched.author && Boolean(formik.errors.author)}
              helperText={formik.touched.author && formik.errors.author}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              fullWidth
              id="publisher"
              name="publisher"
              label="publisher"
              InputProps={{
                className: classes.input,
              }}
              value={formik.values.publisher}
              onChange={formik.handleChange}
              error={
                formik.touched.publisher && Boolean(formik.errors.publisher)
              }
              helperText={formik.touched.publisher && formik.errors.publisher}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              fullWidth
              id="published"
              name="published"
              label="published"
              InputProps={{
                className: classes.input,
              }}
              value={formik.values.published}
              onChange={formik.handleChange}
              error={
                formik.touched.published && Boolean(formik.errors.published)
              }
              helperText={formik.touched.published && formik.errors.published}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              fullWidth
              id="pages"
              name="pages"
              label="pages"
              InputProps={{
                className: classes.input,
              }}
              value={formik.values.pages}
              onChange={formik.handleChange}
              error={formik.touched.pages && Boolean(formik.errors.pages)}
              helperText={formik.touched.pages && formik.errors.pages}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="dense"
              fullWidth
              id="isbn"
              name="isbn"
              label="isbn"
              InputProps={{
                className: classes.input,
              }}
              value={formik.values.isbn}
              onChange={formik.handleChange}
              error={formik.touched.isbn && Boolean(formik.errors.isbn)}
              helperText={formik.touched.isbn && formik.errors.isbn}
            />
          </Grid>
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
});
export default CreateBook;
