import React, { PropTypes } from 'react'

import Blurb from '../Blurb'
import Contribute from './Contribute'

function Donate({ sectionBlurb }) {
  return (
    <div>
      <Blurb sectionBlurb={sectionBlurb} />
      <Contribute />
    </div>
  )
}

Donate.propTypes = {
  sectionBlurb: PropTypes.string.isRequired,
}
Donate.defaultProps = {
}
export default Donate
