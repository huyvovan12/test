import { ThemeProvider } from '@mui/material/styles';
import RoutesContainer from './routes';
import { theme } from './themes';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesContainer />
    </ThemeProvider>
  );
}

export default App;
