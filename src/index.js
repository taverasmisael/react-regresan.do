import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Theme from './styles/theme'
import Routes from './routes'

import registerServiceWorker from './utils/registerServiceWorker'

import './styles'

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
