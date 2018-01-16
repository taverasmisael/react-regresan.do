import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const PrivateRoute = ({ canActivate, redirectTo = '/login', component: Component, ...rest }) =>
  canActivate() ? <Route {...rest} component={Component} /> : <Redirect to={redirectTo} />

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  canActivate: PropTypes.func.isRequired,
  redirectTo: PropTypes.string
}

export default PrivateRoute
