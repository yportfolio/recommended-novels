import React, { useEffect } from "react";
import Article from "../components/Article";
import { fetchPosts } from "../redux/action/DataActions";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        yStudio
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Home = ({ error, isLoaded, books, dispatch }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isLoaded) {
    return (
      <Typography variant={"h2"} component={"h1"}>
        Loading...
      </Typography>
    );
  } else if (error) {
    return (
      <Typography variant={"h2"} component={"h1"}>
        Something went wrong...
      </Typography>
    );
  } else {
    return (
      <Container>
        <Grid container>
          {books.map((book) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={book.primary_isbn10}>
                <Article book={book} />
              </Grid>
            );
          })}
        </Grid>
        <Box mt={4}>
          <Copyright />
        </Box>
      </Container>
    );
  }
};

//The books in state.books come from index of reducers.
const mapStateToProps = (state) => {
  return {
    isLoaded: state.books.isLoaded,
    books: state.books.books,
    error: state.books.error,
  };
};

export default connect(mapStateToProps)(Home);
