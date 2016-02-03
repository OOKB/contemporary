import React, { PropTypes } from 'react'

import Blurb from './Blurb'

function Donate({ sectionBlurb }) {
  return (
    <div>
      <Blurb sectionBlurb={sectionBlurb} />
      {/* <DonationForm /> ??? */}
    </div>
  )
}

Donate.propTypes = {
  sectionBlurb: PropTypes.string.isRequired,
}
Donate.defaultProps = {
}
export default Donate
