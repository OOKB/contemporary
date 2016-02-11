import React, { PropTypes } from 'react'

function Support({ children, pageName, pageClass, pageBlurb }) {
  const classNames = "container " + `${pageClass}`
  return (
    <div className={classNames} >
      <h1 className="pageName">{ pageName }.</h1>
      <p className="lead six" dangerouslySetInnerHTML={{ __html: pageBlurb }} />
      { children }
    </div>
  )
}

Support.propTypes = {
  children: PropTypes.node,
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string,
}
Support.defaultProps = {
  pageName: 'Error 404: Page Not Found',
}
export default Support
