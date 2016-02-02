import React, { PropTypes } from 'react'

import Blurb from './Blurb'

function Wishlist({ sectionBlurb }) {
  return (
    <div>
      <Blurb sectionBlurb={sectionBlurb} />
      <p> Pretty, designed wishlist button... </p>
    </div>
  )
}

Wishlist.propTypes = {
  sectionName: PropTypes.string.isRequired,
}
Wishlist.defaultProps = {
}
export default Wishlist
