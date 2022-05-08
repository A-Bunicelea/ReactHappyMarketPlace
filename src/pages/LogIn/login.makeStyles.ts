import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    height: '100%',
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
  },

  logo: {
    width: '4rem',
    height: '4rem',
    margin: '0 auto',
  },

  logoImg: {
    width: '100%',
    height: '100%',
  },

  title: {
    margin: '1rem 0',
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
  },

  formInput: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },

  errorText: {
    margin: 0,
    color: '#FF0000',
    width: '100%',
    padding: '0',
  },

  text: {
    margin: '0.5rem 0',
  },

  accountContainer: {
    border: `1px solid ${theme.palette.text.disabled}`,
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.contrastText,
  },

  accText: {
    fontSize: '1rem',
    margin: '0.25rem',
    color: theme.palette.text.primary,
  },

  detailsContainer: {
    padding: 0,
  },

  btn: {
    width: '100%',
    marginBottom: '1rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:active': {
      backgroundColor: '#01739C',
    },
  },

  link: {
    marginTop: '1rem 0',
  },

  linkText: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}));

export default useStyles;
