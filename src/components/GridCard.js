import React, { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardProduct from "./CardProduct";
import {previews} from '../actions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:10
   
  },
  
  control: {
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(12)
  },
  item:{
    margin:10
  }
}));

export const GridCard = () => {

  const classes = useStyles();
 const {products} = useSelector(state => state.products);
 const dispatch = useDispatch();


 useEffect(() =>{
   const loadProduct = () =>dispatch(previews());
    loadProduct()
 },[dispatch])

  return (
    <Grid container  className={classes.root }>
      <Grid item={true} xs={12}   >
          <Grid container justify="space-between"   >
          {
            products.map((product,id) =>
            
            <CardProduct 
            key={id}
            product={product}
            className={classes.card}
            />
            )
          }
          </Grid>
      </Grid>
    </Grid>
  );
};
