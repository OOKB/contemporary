import React, { PropTypes } from 'react'

import Logo from '../Logo'

function LogoBlock({ children, pageName }) {
  return (
    <div className="three columns logo-wrapper">
      <h1 className="wordmark hidden">{ pageName }</h1>
      <Logo />
      { children }
    </div>
  )
}

LogoBlock.propTypes = {
  children: PropTypes.node,
  pageName: PropTypes.string,
}

LogoBlock.defaultProps = {
  pageName: 'The Contemporary',
}

export default LogoBlock
