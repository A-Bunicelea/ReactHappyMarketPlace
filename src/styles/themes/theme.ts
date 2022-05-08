import { createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      //blue
      main: '#00506D',
      //dirty white
      contrastText: '#F4F4F4',
    },
    background: {
      default: '#F9F9F9',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#404040',
      // secondary: '#303030',
      secondary: '#686868',
      disabled: '#949494',
    },
  },
});
export default theme;
