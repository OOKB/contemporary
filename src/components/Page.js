import React, { PropTypes } from 'react'

function Page({ children, pageName, pageClass, pageBlurb }) {
  const classNames = "container " + `${pageClass}`
  return (
    <div className={classNames} >
      <h1 className="pageName">{ pageName }.</h1>
      <p className="lead six" dangerouslySetInnerHTML={{ __html: pageBlurb }} />
      { children }
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string,
}
Page.defaultProps = {
  pageName: 'Error 404: Page Not Found',
}
export default Page
