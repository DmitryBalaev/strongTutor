import createTheme from '@mui/material/styles/createTheme';

export const defaultThemeMode = 'system';

export const theme = createTheme({
  colorSchemes: { dark: true, light: true },
  defaultColorScheme: 'dark',
});
