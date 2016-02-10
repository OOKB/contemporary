import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import Blurb from '../Blurb'

function Programs({ pageName, pageSection, children }) {
  return (
    <Page pageName={pageName}>
      { children }
    </Page>
  )
}

Programs.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
Programs.defaultProps = {
  pageName: 'Programs',
}
export default Programs
