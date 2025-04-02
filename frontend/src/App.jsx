import './App.css'
import AppRouter from './router/AppRouter';
import { CssBaseline, ThemeProvider} from '@mui/material';
import { theme } from './theme/theme';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import { useDispatch } from 'react-redux';
import { verifyTokenRequest } from './redux/reducers/authReducer';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(verifyTokenRequest())
  }, [dispatch])
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App