import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import Blurb from '../Blurb'

function Gritfund({ pageName, pageBlurb, children }) {
  return (
    <Page pageName={pageName} pageBlurb={pageBlurb} >
      { children }
    </Page>
  )
}

Gritfund.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string,
  pageSection: PropTypes.object,
}
Gritfund.defaultProps = {
  pageName: 'GritFund',
  pageBlurb: 'The Grit Fund supports unincorporated and collaborative artist-organized activity that contributes significantly to Baltimore’s arts landscape but seldom qualifies for traditional funding. Established with generous support from The Andy Warhol Foundation for the Visual Arts, the Grit Fund expands Warhol’s Regional Regranting Program to the Mid-Atlantic, encouraging projects that generate opportunities and create platforms for artists to engage with each other and with the public. Funded activities can include but are not limited to: exhibitions, publications, public events, public art, film screenings, the ongoing work of an existing arts venue or collective, and the founding of a new arts venue or collective. <br/><br/>The Grit Fund, administered by The Contemporary, provides 8-12 grants in amounts between $1,000–$6,000, totaling $50,000 annually. The Grit Fund accepts proposals from non-incorporated, artist-organized initiatives that work collaboratively and reside in Baltimore City or Baltimore County. Projects must take place in either Baltimore City or Baltimore County and be accessible to the general public. The Contemporary’s mission is inspired by three guiding principles: artists matter, collaboration is key, and audience is everywhere. In keeping with this mission, the Grit Fund values risk-taking, encourages collaboration, and seeks to expand points of access to contemporary art.'
}
export default Gritfund
