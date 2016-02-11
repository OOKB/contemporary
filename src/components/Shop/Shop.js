import React, { PropTypes } from 'react'

import Placeholder from '../Placeholder'

function Shop({ pageName, pageBlurb }) {
  return (
    <Placeholder>
      <h3>{pageName}</h3>
      <p className="lead">{pageBlurb}</p>
    </Placeholder>
  )
}

Shop.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string.isRequired,
}
Shop.defaultProps = {
  pageName: 'The Contemporary Shop',
  pageBlurb: 'Coming soon...'
}
export default Shop
