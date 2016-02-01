import React, { PropTypes } from 'react'

// Basic suggestion button.
function Supporters({ sectionBlurb }) {
  return (
    <div>
      <Blurb sectionBlurb={sectionBlurb} />
      <p> somehow get the lists? </p>
    </div>
  )
}

Supporters.propTypes = {
  sectionBlurb: PropTypes.string.isRequired,
}
Supporters.defaultProps = {
}
export default Supporters
