import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'

import { HomePage, AdminPage, LoginPage, NotFoundPage } from './pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute path="/admin" component={AdminPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default Routes
