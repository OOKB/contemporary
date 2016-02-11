import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import Blurb from '../Blurb'
import Current from '../Current'
import Upcoming from '../Upcoming'
import Archive from '../Archive'

function Speakers({ pageName, pageBlurb, children }) {
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

Speakers.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string,
  pageSection: PropTypes.object,
}
Speakers.defaultProps = {
  pageName: 'Speakers',
  pageBlurb: 'Our annual Speaker Series brings internationally-recognized artists, critics, and art professionals to Baltimore to inspire, awe, and challenge our home audience. Each year the theme shifts to reflect contemporary practices and trends. All lectures are free and held at the <a href="http://www.bsfa.org">Baltimore School for the Arts</a>, located at 712 Cathedral Street.'
}
export default Speakers
