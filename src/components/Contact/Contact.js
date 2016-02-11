import React, { PropTypes } from 'react'

import Placeholder from '../Placeholder'
import SocialLinks from '../SocialLinks'
import Mailchimp from '../Mailchimp'

function Contact({ pageName, pageBlurb }) {
  return (
    <Placeholder>
      <h3>{pageName}</h3>
      <p className="lead mb2" dangerouslySetInnerHTML={{ __html: pageBlurb }} />
      <SocialLinks />
      <Mailchimp />
    </Placeholder>
  )
}

Contact.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string,
}
Contact.defaultProps = {
  pageName: 'The Contemporary',
  pageBlurb: '429 N. Eutaw St, 1S <br/>Baltimore, MD 21201 <br/>o: 443.388.8980  <br/>f: 410.387.7658  <br/>info@contemporary.org',
}
export default Contact
