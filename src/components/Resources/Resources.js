import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import Blurb from '../Blurb'

function Resources({ pageName, pageSection, children }) {
  return (
    <Page pageName={pageName}>
      { children }
    </Page>
  )
}

Resources.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
Resources.defaultProps = {
  pageName: 'Resources',
}
export default Resources
