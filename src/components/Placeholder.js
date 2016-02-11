import React, { PropTypes } from 'react'

import Logo from './Logo'

function Placeholder({ children, pageName, pageClass, pageBlurb }) {
  const classNames = "container " + `${pageClass}`
  return (
    <div className={classNames} >
      <div className="mt4 four offset-by-four text-center">
        <Logo className="mb2"/>
        { children }
      </div>
    </div>
  )
}

Placeholder.propTypes = {
  children: PropTypes.node,
  pageName: PropTypes.string.isRequired,
}
Placeholder.defaultProps = {
  pageName: 'The Contemporary',
}
export default Placeholder
