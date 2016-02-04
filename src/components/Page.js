import React, { PropTypes } from 'react'

function Support({ children, pageName }) {
  return (
    <div className="container">
    <h1>{ pageName }</h1>
      { children }
    </div>
  )
}

Support.propTypes = {
  children: PropTypes.node,
  pageName: PropTypes.string.isRequired,
}
Support.defaultProps = {
  pageName: 'Error 404: Page Not Found',
}
export default Support
