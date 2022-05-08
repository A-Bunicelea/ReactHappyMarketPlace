import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  app: {
    width: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.background.default,
    textAlign: 'center',
  },
}));

export default useStyles;
