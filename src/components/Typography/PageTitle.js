import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'

const PageTitle = ({ children, color = 'inherit', truncate = false, align = 'left' }) => (
  <Typography gutterBottom type="headline" color={color} align={align} noWrap={truncate}>
    {children}
  </Typography>
)

PageTitle.propTypes = {
  children: PropTypes.string,
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary', 'accent', 'error', 'default']),
  truncate: PropTypes.bool
}

export default PageTitle
