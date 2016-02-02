import React, { PropTypes } from 'react'

import Blurb from './Blurb'

// Basic suggestion button.
function Supporters({ sectionBlurb }) {
  return (
    <div>
      <Blurb sectionBlurb={sectionBlurb} />
      <p> somehow make the lists? </p>
    </div>
  )
}

Supporters.propTypes = {
  sectionBlurb: PropTypes.string.isRequired,
}
Supporters.defaultProps = {
}
export default Supporters
