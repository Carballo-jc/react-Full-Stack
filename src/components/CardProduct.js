import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  ButtonGroup,
  CardActionArea,
  Divider,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactCardFlip from "react-card-flip";
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 200,
    margin: 10,
  },

  title: {
    fontSize: 14,
  },
  sub_title: {
    fontSize: 36,
  },
  sub: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardProduct = ({ product }) => {
  const classes = useStyles();
  const { name, quantity, price } = product;
  const [isFlipped, setIsFlipped] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleNext = () => {
    setIsFlipped(!isFlipped);
  };


  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {name}
              <Button variant="contained" color="primary" onClick={handleNext}>
                <AddIcon />
              </Button>
            </Typography>
            <Divider />
            <Typography
              variant="body2"
              component="p"
              className={classes.sub_title}
            >
              {price}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              En Stock:{quantity}
            </Typography>

            <Typography>Disponible</Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.sub}
            color="textSecondary"
            gutterBottom
          >
            {price}
            <Button onClick={handleNext} variant="contained" color="primary">
              <ArrowBackIcon />
            </Button>
          </Typography>

          <Divider />
          <Typography variant="body2" component="p">
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            En Stock:{quantity}
          </Typography>
          <ButtonGroup
            size="small"
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button onClick={() => setCounter(counter - 1)}>--</Button>
            <TextField
              id="outlined-number"
              variant="outlined"
              type="number"
              value={counter}
            />
            <Button onClick={() => setCounter(counter + 1)}>+</Button>
          </ButtonGroup>
        </CardContent>
      </Card>
    </ReactCardFlip>
  );
};

export default CardProduct;
