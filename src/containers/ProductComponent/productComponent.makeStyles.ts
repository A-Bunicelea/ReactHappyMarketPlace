import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    border: `1px solid ${theme.palette.text.disabled}`,
    borderRadius: '10px',
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '300px',
    padding: '1rem',
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  productCategory: {
    fontSize: '0.875rem',
    textAlign: 'center',
    color: theme.palette.text.disabled,
  },

  productTitle: {
    color: theme.palette.text.primary,
    fontSize: '1.125rem',
    lineHeight: '1.2em',
    height: '2.7rem',
    overflow: 'hidden',
    fontWeight: 600,
    marginBottom: '0.375rem',
  },
  productDescription: {
    fontSize: '0.9rem',
    lineHeight: '1rem',
    height: '2rem',
    overflow: 'hidden',
    marginBottom: '0.375rem',
    color: theme.palette.text.secondary,
  },

  ratingContainer: {
    marginBottom: '0.375rem',
    height: '1.5rem',
  },
  productPrice: {
    margin: 0,
    color: theme.palette.text.primary,
    fontSize: '1.125rem',
    fontWeight: 600,
    marginBottom: '0.375rem',
  },
  prodImg: {
    maxHeight: '5rem',
    maxWidth: '4rem',
  },
  productText: {
    padding: '0',
  },

  btnContainer: {
    padding: '0',
  },

  btn: {
    fontSize: '0.8rem',
    background: theme.palette.primary.main,
    color: theme.palette.background.default,
    padding: '2px 0',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '&:active': {
      backgroundColor: '#01739C',
    },
  },
}));

export default useStyles;
