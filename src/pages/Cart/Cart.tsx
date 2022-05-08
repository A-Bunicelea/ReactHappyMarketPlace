import React from 'react';
import { RootState } from '../../store';
import { useAppSelector } from '../../hooks/appSelector';
import MainLayout from '../../layouts/MainLayout';
import { CartProductInterface } from '../../types';
import CartProduct from '../../containers/CartProduct/CartProduct';
import { Grid, Typography, Container } from '@material-ui/core';
import useStyles from './cart.makeStyles';

const Cart: React.FC = () => {
  const classes = useStyles();
  const cart = useAppSelector((state: RootState) => state.cart.addedProducts);
  const total = useAppSelector((state: RootState) =>
    state.cart.total.toFixed(2)
  );

  return (
    <MainLayout>
      <Container className={classes.container}>
        <Typography variant="h1" className={classes.title}>
          Cart
        </Typography>
        <Grid container spacing={2} className={classes.gridContainer}>
          {cart.map((product: CartProductInterface) => (
            <Grid item key={product.id} xs={12}>
              <CartProduct product={product} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="body1" className={classes.total}>
          Total: ${total}
        </Typography>
      </Container>
    </MainLayout>
  );
};

export default Cart;
