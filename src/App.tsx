import React from 'react';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';

import { setTheme } from 'theme';

export const App: React.FC = () => {
  const { theme } = setTheme({});

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography>Setup Front React</Typography>
    </ThemeProvider>
  );
};
