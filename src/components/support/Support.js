import React, { PropTypes } from 'react'

import Donate from './Donate'
import Membership from './Membership'
import Wishlist from './Wishlist'
import Supporters from './Supporters'

// Basic suggestion button.
function Support({ pageName, plans }) {
  return (
    <div className="container">
      <h1>{ pageName }</h1>
      <Donate />
      <Membership plans={plans} />
      <Wishlist />
      <Supporters />
    </div>
  )
}

Support.propTypes = {
  pageName: PropTypes.string.isRequired,
  plans: PropTypes.array.isRequired,
}
Support.defaultProps = {
  pageName: 'Support',
}
export default Support
