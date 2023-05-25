import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#eb0628',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: `"Poppins" sans-serif`,
    fontSize: 10,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
