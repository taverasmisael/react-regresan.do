import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'

import OverviewPage from './Overview'
import BranchesPage from './Branches'

const Routes = ({ base = '/admin' }) => (
  <Switch>
    <Route exact path={base} component={OverviewPage} />
    <Route exact path={`${base}/branches`} component={BranchesPage} />
    <Redirect to={base} />
  </Switch>
)

Routes.propTypes = {
  base: PropTypes.string.isRequired
}

export default Routes
