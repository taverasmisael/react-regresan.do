import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
export default class HomePage extends PureComponent {
  static propTypes = {
    prop: PropTypes.any
  }

  render() {
    return <Typography type="body1">Home</Typography>
  }
}
