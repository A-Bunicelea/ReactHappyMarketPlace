import React from 'react';
// import './App.scss';
import useStyles from './styles/app.makeStyles';
import LogIn from './pages/LogIn/LogIn';
import theme from './styles/themes/theme';
import { ThemeProvider } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import Products from './pages/Products/Products';
import Admin from './pages/Admin/Admin';
import Cart from './pages/Cart/Cart';
// import DemoCarousel from './components/DemoCarousel';

export enum Routes {
  products = '/',
  cart = '/cart',
  admin = '/admin',
  login = '/login',
}

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      {/* <DemoCarousel /> */}
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={Routes.products}>
            <Products />
          </Route>

          <Route exact path={Routes.cart}>
            <Cart />
          </Route>

          <Route exact path={Routes.admin}>
            <Admin />
          </Route>

          <Route exact path={Routes.login}>
            <LogIn />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
};

export default App;
