import { createMuiTheme } from 'material-ui'
import DeepPurple from 'material-ui/colors/deepPurple'
import Palette from './palette'

const DefaultTheme = createMuiTheme()

export default createMuiTheme({
  palette: {
    primary: {
      light: Palette[300],
      main: Palette[500],
      dark: Palette[700],
      contrastText: DefaultTheme.palette.getContrastText(Palette[500])
    },
    secondary: {
      light: DeepPurple.A200,
      main: DeepPurple.A400,
      dark: DeepPurple.A700,
      contrastText: DefaultTheme.palette.getContrastText(DeepPurple.A400)
    },
    error: Palette.error
  }
})
