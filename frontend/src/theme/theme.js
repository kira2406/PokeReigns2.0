import { createTheme } from '@mui/material';
const { palette } = createTheme();

export const theme = createTheme({
    palette: {
      primary: {
        main: '#374EE7',
      },
      secondary: {
        main: '#034078',
      },
      background: {
        default: '#ffffff',
      },
      black: palette.augmentColor({
      color: {
        main: "#040404"
      }
    })
    },
    typography: {
      fontFamily: 'Poppins, sans-serif',
      h1: {
        fontSize: '3rem',
        fontWeight: 700,
      },
      body1: {
        fontSize: '1rem',
      },
    },
  })