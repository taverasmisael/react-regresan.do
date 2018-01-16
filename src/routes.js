import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'

import { HomePage, AdminPage, LoginPage } from './pages'

const Routes = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute path="/admin" component={AdminPage} />
    </React.Fragment>
  </Router>
)

export default Routes
