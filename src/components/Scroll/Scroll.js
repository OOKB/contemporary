import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import Blurb from '../Blurb'

function Scroll({ pageName, pageBlurb, children }) {
  return (
    <Page pageName={pageName} pageBlurb={pageBlurb} >
      { children }
    </Page>
  )
}

Scroll.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string,
  pageSection: PropTypes.object,
}
Scroll.defaultProps = {
  pageName: 'Scroll',
  pageBlurb: '<em>Scroll</em> is an annual publication, published by The Contemporary, and produced entirely by our intern staff. Each issue of <em>Scroll</em> will explore a different cultural topic related to the mission and efforts of the museum and will be available, for free, in print and online.'
}
export default Scroll
