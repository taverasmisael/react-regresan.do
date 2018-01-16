import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const IsAuthorized = () => false

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (IsAuthorized() ? <Component {...props} /> : <Redirect to="/login" />)} />
)

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
}

export default PrivateRoute
