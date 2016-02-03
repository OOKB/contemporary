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
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired,
}
Support.defaultProps = {
}
export default Support
