import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
export default class LoginPage extends PureComponent {
  static propTypes = {
    prop: PropTypes.any
  }

  render() {
    return <Typography type="body1">Login</Typography>
  }
}
