import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

export default class HomePage extends PureComponent {
  static propTypes = {
    prop: PropTypes.any
  }

  goLogin = () => this.props.history.push('/login')

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.goLogin} raised color="primary">
          Login
        </Button>
      </React.Fragment>
    )
  }
}
