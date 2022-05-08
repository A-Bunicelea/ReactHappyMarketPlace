import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';
import { useAppDispatch } from '../../hooks/actionDispatcher';
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import { useAppSelector } from '../../hooks/appSelector';
import { RootState } from '../../store';
import { updateUserInfo } from '../../store/actions/userActions';
import { Redirect } from 'react-router-dom';
import { Routes } from '../../App';
import useStyles from './login.makeStyles';

const LogIn: React.FC = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ username: '', password: '' });
  const dispatch: Dispatch<any> = useAppDispatch();
  const errorMsg = useAppSelector((state: RootState) => state.user.errorMsg);
  const isLoggedIn = useAppSelector((state: RootState) => !!state.user.token);

  const handleInputChange = useCallback((event) => {
    //parametrul currentUser - previous value of the state
    setUser((currentUser) => ({
      ...currentUser,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(updateUserInfo(user.username, user.password));
    },
    [user]
  );

  //FOLOSESTE ASTA IN LOC DE HISTORY
  if (isLoggedIn) {
    return <Redirect to={Routes.products} />;
  }

  return (
    <div className={classes.loginContainer}>
      <Container maxWidth="xs">
        <Paper variant="outlined" className={classes.logo}>
          <img src="/images/happy-logo.png" className={classes.logoImg} />
        </Paper>
        <Typography className={classes.title}>Log in</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.formInput}
            type="text"
            name="username"
            label="Username"
            variant="outlined"
            onChange={handleInputChange}
            autoComplete="false"
            required
          />

          <TextField
            className={classes.formInput}
            type="password"
            name="password"
            label="Password"
            variant="outlined"
            onChange={handleInputChange}
            required
            autoComplete="false"
            color="primary"
          />

          {errorMsg ? (
            <Typography>
              <p className={classes.errorText}> {errorMsg}</p>
            </Typography>
          ) : null}

          <Container className={classes.detailsContainer}>
            <p className={classes.text}>
              Please use one of the following pairs to log in:
            </p>
            <Paper className={classes.accountContainer} elevation={0}>
              <p className={classes.accText}>Pair 1:</p>
              <p className={classes.accText}>Username: johnd</p>
              <p className={classes.accText}>Password: m38rmF$</p>
            </Paper>
            <Paper className={classes.accountContainer} elevation={0}>
              <p className={classes.accText}>Pair 2:</p>
              <p className={classes.accText}>Username: mor_2314</p>
              <p className={classes.accText}>Password: 83r5^_</p>
            </Paper>
          </Container>

          <Button className={classes.btn} type="submit">
            Log in
          </Button>
        </form>
        <Typography className={classes.link}>
          <Link to="/" className={classes.linkText}>
            Continue as guest
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default LogIn;
