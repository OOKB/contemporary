import React, { PropTypes } from 'react'

import Placeholder from '../Placeholder'
import SocialLinks from '../SocialLinks'

function Contact({ pageName, pageSection }) {
  return (
    <Placeholder>
      <SocialLinks />
    </Placeholder>
  )
}

Contact.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
Contact.defaultProps = {
  pageName: 'Contact',
}
export default Contact
