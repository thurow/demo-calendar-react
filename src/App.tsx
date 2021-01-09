import React from 'react'
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from 'styled-components';
import { StylesProvider, createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { store } from './store';
import { Calendar } from './components/Calendar';

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
