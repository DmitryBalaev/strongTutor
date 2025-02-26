import { ThemeProvider } from '@mui/material/styles';
import { defaultThemeMode, theme } from './styles/theme';
import { ThemeToggle } from './Components/ThemeToggle/ThemeToggle';

export const App = () => {
  return (
    <ThemeProvider theme={theme} defaultMode={defaultThemeMode}>
      <ThemeToggle />
    </ThemeProvider>
  );
};
