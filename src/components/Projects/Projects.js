import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import Blurb from '../Blurb'
import Current from '../Current'
import Upcoming from '../Upcoming'
import Archive from '../Archive'

function Projects({ pageName, pageBlurb, children }) {
  return (
    <Page pageName={pageName} pageBlurb={pageBlurb} >
      <Row sectionName="Current">
        <Current />
      </Row>
      <Row sectionName="Upcoming">
        <Upcoming />
      </Row>
      <Row sectionName="Archive">
        <Archive />
      </Row>
    </Page>
  )
}

Projects.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string,
  pageSection: PropTypes.object,
}
Projects.defaultProps = {
  pageName: 'Projects',
  pageBlurb: 'We commission site-specific and subject-oriented projects that exist in public space and are in collaboration with artists and existing arts and non-arts institutions, organizations, sites, and spaces.'
}
export default Projects
