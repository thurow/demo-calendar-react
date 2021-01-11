import React from 'react'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from 'styled-components'
import { StylesProvider, createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import { AppBar, Box, Container, Toolbar, Typography } from '@material-ui/core'
import { store } from './store'
import { Calendar } from './components'
import { ReminderModal } from './components/ReminderModal'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

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
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <AppBar component="header" position="relative">
                <Toolbar>
                  <Typography component="h1" variant="h6">Demo Calendar Appointment!</Typography>
                </Toolbar>
              </AppBar>
              <Box component="main" marginTop={5}>
                <Container maxWidth="lg">
                  <Typography variant="h6">Click in the date to add a Reminder:</Typography>
                </Container>
                <Calendar />
                <ReminderModal />
              </Box>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  )
}
