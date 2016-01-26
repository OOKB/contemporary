import React, { PropTypes } from 'react'

import Membership from './Membership'
import Wishlist from './Wishlist'

// Basic suggestion button.
function Support({ pageName }) {
  return (
    <div className="container">
      <h1>{ pageName }</h1>
      <Membership />
      <Wishlist />
    </div>
  )
}

Support.propTypes = {
  pageName: PropTypes.string.isRequired,
}
Support.defaultProps = {
  pageName: 'Support',
}
export default Support
