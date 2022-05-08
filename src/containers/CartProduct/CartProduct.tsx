import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useAppDispatch } from '../../hooks/actionDispatcher';
import {
  removeItem,
  substractQuantity,
  addQuantity,
} from '../../store/actions/cartActions';
import { CartProductInterface } from '../../types';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import useStyles from './cartProduct.makeStyles';

interface CartProductProps {
  product: CartProductInterface;
}

const CartProduct: React.FC<CartProductProps> = ({ product }) => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useAppDispatch();
  const handleRemoveItem = useCallback(
    () => dispatch(removeItem(product.id)),
    []
  );
  const handleAddQuantity = useCallback(
    () => dispatch(addQuantity(product.id)),
    []
  );
  const handleSubstractQuantity = useCallback(
    () => dispatch(substractQuantity(product.id)),
    []
  );

  return (
    <Card className={classes.container} elevation={0}>
      <div className={classes.productInfo}>
        <Typography
          gutterBottom
          variant="body1"
          className={classes.productQuantity}
        >
          {product.quantity} x
        </Typography>
        <CardMedia className={classes.media} title="img">
          <img src={product.image} className={classes.prodImg} />
        </CardMedia>

        <CardContent className={classes.productText}>
          <Typography
            gutterBottom
            variant="body1"
            className={classes.productTitle}
          >
            {product.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            className={classes.productPrice}
          >
            ${product.price}
          </Typography>
          <div className={classes.btnContainer}>
            <IconButton
              size="small"
              title="Remove from cart"
              className={classes.btn}
              onClick={handleRemoveItem}
            >
              <DeleteIcon fontSize="small" className={classes.icon} />
            </IconButton>

            <IconButton
              title="Add one"
              className={classes.btn}
              onClick={handleAddQuantity}
            >
              <AddIcon fontSize="small" className={classes.icon} />
            </IconButton>

            <IconButton
              title="Delete one"
              className={classes.btn}
              onClick={handleSubstractQuantity}
            >
              <RemoveIcon fontSize="small" className={classes.icon} />
            </IconButton>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default CartProduct;
