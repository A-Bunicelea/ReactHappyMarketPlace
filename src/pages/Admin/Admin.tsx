import React, { useState, useCallback } from 'react';
import MainLayout from '../../layouts/MainLayout';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import { Container, Typography } from '@material-ui/core';
import useStyles from './admin.makeStyles';

const Admin: React.FC = () => {
  const classes = useStyles();
  const [numberOfProducts, setNumberOfProducts] = useState('');

  const onChange = useCallback((event: unknown, newValue: string) => {
    setNumberOfProducts(newValue);
    localStorage.setItem('numberOfProducts', newValue);
  }, []);

  return (
    <MainLayout>
      <Container className={classes.container} maxWidth="md">
        <Typography className={classes.title}>
          Please select the number of products you want displayed
        </Typography>
        <SliderComponent onChange={onChange} />
      </Container>
    </MainLayout>
  );
};

export default Admin;
