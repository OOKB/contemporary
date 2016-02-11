import React, { PropTypes } from 'react'

import Logo from '../Logo'
import SocialLinks from '../SocialLinks'

function About({ pageName, pageSection }) {
  return (
    <div className="container text-center">
      <Logo />
      <SocialLinks />
    </div>
  )
}

About.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
About.defaultProps = {
  pageName: 'Contact',
}
export default About
