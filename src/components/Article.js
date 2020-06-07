import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

export default function Article({ book }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={book.book_image} />
        <CardContent>
          <Typography
            variant={"h6"}
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {book.title}
          </Typography>
          <Typography
            variant={"body1"}
            align="left"
            color="textPrimary"
            gutterBottom
          >
            {book.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link color="primary" href={book.amazon_product_url}>
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}
