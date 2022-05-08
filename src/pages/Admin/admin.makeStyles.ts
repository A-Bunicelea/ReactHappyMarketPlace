import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2rem 1.5rem',
  },

  title: {
    fontWeight: 600,
    marginBottom: '3.5rem',
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
