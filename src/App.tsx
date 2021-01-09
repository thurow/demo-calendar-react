import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider, createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import { Provider } from 'react-redux';
import { store } from './store';
import Calendar from './components/Calendar/Calendar';
import { ThemeProvider } from 'styled-components';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';

export const App = (): JSX.Element => {
  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: 'light',
      },
    }),
    [],
  );

  return (
    <Provider store={store}>
      <CssBaseline />
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <AppBar component="header" position="relative">
              <Toolbar>
                <Typography component="h1" variant="h6">Demo Calendar Apointment!</Typography>
              </Toolbar>
            </AppBar>
            <Box component="main" marginTop={8}>
              <Calendar />
            </Box>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  )
}
