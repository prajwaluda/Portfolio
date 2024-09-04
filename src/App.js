import './App.css';
import ButtonAppBar from './components/appbar';
import { Home } from './components/home';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { themeSettings } from './theme';
import { createTheme } from '@mui/material';
import { Footer } from './components/footer';

function App() {
  const theme = createTheme(themeSettings("dark"));
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <ButtonAppBar/>
        <Home/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
