import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

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
    <div>
      <CssBaseline />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <h1>Demo Calendar!</h1>
        </ThemeProvider>
      </StylesProvider>
    </div>
  )
}
