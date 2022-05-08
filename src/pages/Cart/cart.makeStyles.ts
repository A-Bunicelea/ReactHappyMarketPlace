import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    height: '100vh',
    maxWidth: '100%',
  },

  title: {
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    fontSize: '1.3rem',
    color: theme.palette.text.primary,
  },

  total: {
    textAlign: 'center',
    fontSize: '1.2rem',
    color: theme.palette.text.primary,
    maxWidth: 900,
    margin: '0 auto',
    marginTop: theme.spacing(3),
  },

  gridContainer: {
    maxWidth: 900,
    margin: '0 auto',
  },

  // line: {
  //   marginTop: theme.spacing(3),
  //   marginBottom: theme.spacing(3),
  //   width: '100%',
  //   height: '2px',
  //   maxWidth: 900,
  //   margin: '0 auto',
  //   background: theme.palette.text.disabled,
  // },
}));

export default useStyles;
