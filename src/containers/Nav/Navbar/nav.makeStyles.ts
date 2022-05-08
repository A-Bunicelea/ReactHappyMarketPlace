import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.contrastText,
    padding: '0.5rem 0.5rem 0 0.5rem',
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  menuContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    width: '1.5rem',
    height: '1.5rem',
    color: theme.palette.text.primary,
    marginRight: '0.5rem',
  },
  logo: {
    width: '2rem',
    height: '2rem',
  },
  logoImg: {
    width: '100%',
    height: '100%',
  },
  userContainer: {
    color: theme.palette.text.primary,
  },
  link: {
    textAlign: 'left',
    textDecoration: 'none',
    fontWeight: 500,
    color: theme.palette.text.primary,
    cursor: 'pointer',
  },
}));

export default useStyles;
