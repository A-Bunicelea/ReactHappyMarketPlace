import React, { useCallback } from 'react';
import { Product } from '../../types';
import { Dispatch } from 'redux';
import { useAppDispatch } from '../../hooks/actionDispatcher';
import StarComponent from '../../components/StarComponent/StarComponent';
import { addToCart } from '../../store/actions/cartActions';
import {
  Typography,
  Button,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
} from '@material-ui/core';
import useStyles from './productComponent.makeStyles';

interface ProductProps {
  product: Product;
  isLoggedIn?: boolean;
}

const ProductComponent: React.FC<ProductProps> = ({ product, isLoggedIn }) => {
  const dispatch: Dispatch<any> = useAppDispatch();
  const classes = useStyles();
  const stars = Math.round(product.rating.rate);

  const handleClick = useCallback(() => {
    dispatch(addToCart(product));
  }, []);

  return (
    <Card className={classes.card} elevation={0}>
      <Typography
        gutterBottom
        variant="body1"
        className={classes.productCategory}
      >
        {product.category}
      </Typography>
      <CardActionArea>
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
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.productDescription}
          >
            {product.description}
          </Typography>
          <Box className={classes.ratingContainer}>
            <StarComponent rating={stars} />
          </Box>
          <Typography
            gutterBottom
            variant="body1"
            className={classes.productPrice}
          >
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.btnContainer}>
        {isLoggedIn ? (
          <Button
            fullWidth
            variant="contained"
            disableElevation
            className={classes.btn}
            onClick={handleClick}
            disableRipple={true}
          >
            Add to cart
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
};

export default ProductComponent;
