import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0.5rem',
    backgroundColor: theme.palette.background.default,
    border: `0.2px solid ${theme.palette.text.disabled}`,
    borderRadius: '10px',
  },

  productInfo: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    width: '105px',
    [theme.breakpoints.up('sm')]: {
      width: '105px',
    },
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },

  prodImg: {
    height: 'auto',
    maxWidth: '80%',
  },

  productText: {
    textAlign: 'left',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: '0.75rem 0.5rem',
    '&:last-child': {
      paddingBottom: '0.75rem',
    },
  },

  productTitle: {
    color: theme.palette.text.primary,
    fontSize: '1rem',
    lineHeight: '1em',
    height: '2rem',
    overflow: 'hidden',
    fontWeight: 600,
    margin: 0,
    marginBottom: '0.375rem',
  },

  productPrice: {
    margin: 0,
    marginBottom: '0.375rem',
  },

  productQuantity: {
    width: '20%',
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '0',
    padding: '0',
    maxWidth: '150px',
  },

  btn: {
    fontSize: '0.75rem',
    borderRadius: '2px',
    backgroundColor: theme.palette.primary.main,
    width: '30%',
    height: '15px',
    padding: '0.65rem',
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:active': {
      backgroundColor: '#01739C',
    },
  },

  icon: {
    [theme.breakpoints.down('xs')]: {
      width: '15px',
      height: '15px',
    },
  },
}));

export default useStyles;
