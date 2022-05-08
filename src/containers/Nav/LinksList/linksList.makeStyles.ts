import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  list: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    width: '350px',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  item: {
    padding: '0.5rem',
    display: 'flex',
    height: '4.25rem',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },

  itemLink: {
    textAlign: 'left',
    textDecoration: 'none',
    fontWeight: 500,
    color: theme.palette.text.primary,
    cursor: 'pointer',
  },

  active: {
    borderBottom: `2px solid ${theme.palette.text.disabled}`,
  },
}));

export default useStyles;
