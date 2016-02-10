import React, { PropTypes } from 'react'

import Blurb from '../Blurb'

function Wishlist({ sectionBlurb, amazonButton }) {
  return (
    <div>
      <Blurb sectionBlurb={sectionBlurb} />
      <p className="three columns">
        <a href={ amazonButton.link } className="no-style"><button className="border-button large twelve orange">{ amazonButton.label }</button></a>
      </p>
    </div>
  )
}

Wishlist.propTypes = {
  sectionBlurb: PropTypes.string.isRequired,
}
Wishlist.defaultProps = {
  amazonButton: {
    label: 'Amazon Wishlist',
    link: 'https://www.amazon.com/gp/registry/wishlist/ref=cm_wl_search_1?ie=UTF8&cid=ACRNUDSXBTBYZ',
  },
}
export default Wishlist
