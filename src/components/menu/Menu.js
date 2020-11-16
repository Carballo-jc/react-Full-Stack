import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import categories from "../../data/categories";
import {useDispatch} from 'react-redux'
import {filterProduct}  from "../../actions";
// import products from "../../data/products";


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 400,
  },
});

const Menu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

const selectItems= (category) =>{
  dispatch(filterProduct(category))
}

  const BuilRecurcibe = ({ categories }) => {
    return (
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}

      >
        {categories.map((category, index,id) => {
          const { name, sublevels } = category;
          return (
            <TreeItem
              nodeId={String(index)}
              label={name}
              key={index}
        onClick={() =>selectItems(category)}

            >
              {sublevels && <BuilRecurcibe categories={sublevels} />}
            </TreeItem>
          );
        })}
      </TreeView>
    );
  };
  return <div>{<BuilRecurcibe categories={categories} />}</div>;
};

export default Menu;
