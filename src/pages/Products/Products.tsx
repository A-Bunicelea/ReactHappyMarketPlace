import React, { useEffect } from 'react';
import { fetchProducts } from '../../store/actions/productsActions';
import { Product } from '../../types';
import ProductComponent from '../../containers/ProductComponent/ProductComponent';
import { Dispatch } from 'redux';
import { RootState } from '../../store';
import { useAppSelector } from '../../hooks/appSelector';
import { useAppDispatch } from '../../hooks/actionDispatcher';
import MainLayout from '../../layouts/MainLayout';
import { Typography, Box, Container, Grid } from '@material-ui/core';
import useStyles from './products.makeStyles';

const Products: React.FC = () => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useAppDispatch();
  const isLoggedIn = useAppSelector((state: RootState) => !!state.user.token);
  const productsList = useAppSelector(
    (state: RootState) => state.products.list
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <MainLayout>
      <Box className={classes.hero} />
      <Container maxWidth="lg" className={classes.productsContainer}>
        <Typography variant="h1" className={classes.pageTitle}>
          Our Products
        </Typography>
        <Grid container spacing={2}>
          {productsList.map((product: Product) => (
            <Grid item key={product.id} xs={6} sm={6} md={4} lg={3}>
              <ProductComponent product={product} isLoggedIn={isLoggedIn} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Products;
