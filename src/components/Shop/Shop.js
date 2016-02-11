import React, { PropTypes } from 'react'

import Placeholder from '../Placeholder'

function Shop({ pageName, pageSection }) {
  return (
    <Placeholder>
      <p>Shoppy Things</p>
    </Placeholder>
  )
}

Shop.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
Shop.defaultProps = {
  pageName: 'Shop',
}
export default Shop
