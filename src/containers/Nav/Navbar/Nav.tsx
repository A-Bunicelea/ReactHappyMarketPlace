import React, { useCallback, useState } from 'react';
import LinksList from '../LinksList/LinksList';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Hidden,
  Drawer,
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from '../../../App';
import { RootState } from '../../../store';
import { useAppSelector } from '../../../hooks/appSelector';
import { useAppDispatch } from '../../../hooks/actionDispatcher';
import { updateUserSuccess } from '../../../store/actions/userActions';
import constants from '../../../models/constants';
import { Dispatch } from 'redux';
import useStyles from './nav.makeStyles';

const Nav: React.FC = () => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useAppDispatch();
  const isLoggedIn = useAppSelector((state: RootState) => !!state.user.token);
  const isAdmin = useAppSelector((state: RootState) => state.user.isAdmin);
  const [openDrawer, setOpenDrawer] = useState(false);
  const history = useHistory();

  const handleLogout = useCallback(() => {
    localStorage.setItem('token', '');
    localStorage.setItem('isAdmin', '');

    dispatch(
      updateUserSuccess({
        username: constants.guest,
        password: '',
        token: '',
        isAdmin: false,
      })
    );
    setOpenDrawer(false);

    history.push('/');
  }, [isLoggedIn]);

  const toggleDrawer = useCallback(
    () => setOpenDrawer(!openDrawer),
    [openDrawer]
  );

  return (
    <AppBar position="static" className={classes.appBar} elevation={0}>
      <Toolbar disableGutters className={classes.toolbar}>
        <div className={classes.menuContainer}>
          <Hidden smUp>
            <MenuIcon onClick={toggleDrawer} className={classes.menuIcon} />
          </Hidden>
          <Box className={classes.logo}>
            <img
              src="/images/happy-logo.png"
              alt="logo"
              className={classes.logoImg}
            />
          </Box>
        </div>
        <Hidden xsDown>
          <LinksList
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
            handleLogout={handleLogout}
          />
        </Hidden>
        <Box className={classes.userContainer}>
          {isLoggedIn ? (
            <Typography variant="body1">Welcome back!</Typography>
          ) : (
            <Link to={Routes.login} className={classes.link}>
              Log in
            </Link>
          )}
        </Box>
      </Toolbar>
      <Hidden smUp>
        <Drawer anchor="left" open={openDrawer}>
          <LinksList
            isLoggedIn={isLoggedIn}
            isAdmin={isAdmin}
            handleLogout={handleLogout}
            closeDrawer={toggleDrawer}
          />
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Nav;
