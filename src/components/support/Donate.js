import React, { PropTypes } from 'react'

import Blurb from './Blurb'

// Basic suggestion button.
function Donate({ sectionName, sectionBlurb }) {
  return (
    <div>
      <Blurb sectionBlurb={sectionBlurb} />
      {/*<DonationForm /> ??? */}
    </div>
  )
}

Donate.propTypes = {
  sectionName: PropTypes.string.isRequired,
}
Donate.defaultProps = {
}
export default Donate
