import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Typography from 'material-ui/Typography'

import Routes from './routes'
export default class AdminPage extends PureComponent {
  static propTypes = {
    prop: PropTypes.any
  }

  render() {
    return (
      <React.Fragment>
        <Typography type="subheading">Admin</Typography>
        <main>
          <Link to="/admin/">Overview?</Link>
          <Link to="/admin/branches/">Branchess?</Link>
          <Routes base={this.props.match.path} />
        </main>
      </React.Fragment>
    )
  }
}
