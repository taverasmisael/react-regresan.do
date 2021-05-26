import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const Heading = ({ children, color = 'inherit', truncate = false, align = 'left', size = '1' }) => (
  <Typography gutterBottom type={`display${size}`} color={color} align={align} noWrap={truncate}>
    {children}
  </Typography>
)

Heading.propTypes = {
  children: PropTypes.string,
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'accent', 'error', 'default']),
  size: PropTypes.oneOf(['1', '2', '3', '4']),
  truncate: PropTypes.bool
}

export default Heading
