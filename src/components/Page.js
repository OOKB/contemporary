import React, { PropTypes } from 'react'

function Support({ children, pageName, pageClass }) {
  const classNames = "container " + `${pageClass}`
  return (
    <div className={classNames} >
      <h1 className="pageName">{ pageName }</h1>
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
