import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: '#EFEFEF',
    position: 'relative',
    backgroundImage: `url('/images/hero-image.jpg')`,
    height: '400px',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  productsContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
  },

  pageTitle: {
    fontWeight: 600,
    paddingBottom: theme.spacing(3),
    fontSize: '1.3rem',
    color: theme.palette.text.primary,
  },
}));

export default useStyles;
