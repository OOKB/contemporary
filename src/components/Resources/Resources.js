import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import Blurb from '../Blurb'

function Resources({ pageName, pageSection, children }) {
  return (
    <Page pageName={pageName}>
      <Row sectionName={pageSection.workspace.sectionName}>
        <Blurb sectionBlurb={pageSection.workspace.sectionBlurb} />
      </Row>
      <Row sectionName={pageSection.studiovisits.sectionName}>
        <Blurb sectionBlurb={pageSection.studiovisits.sectionBlurb} />
      </Row>
      <Row sectionName={pageSection.equipmentlibrary.sectionName}>
        <Blurb sectionBlurb={pageSection.equipmentlibrary.sectionBlurb} />
      </Row>
      <Row sectionName={pageSection.artistretreat.sectionName}>
        <Blurb sectionBlurb={pageSection.artistretreat.sectionBlurb} />
      </Row>
      <Row sectionName={pageSection.gritfund.sectionName}>
        <Blurb sectionBlurb={pageSection.gritfund.sectionBlurb} />
      </Row>
    </Page>
  )
}

Resources.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
Resources.defaultProps = {
  pageName: 'Resources',
  pageSection: {
    workspace: {
      sectionName: 'Workspace',
      sectionBlurb: 'All Individual and Team Members can utilize Workspace, which is our main headquarters, to work individually or host team meetings and events. We offer a coworking space equipped with private workstations, group meeting space, a conference room, and library of contemporary art books, magazines, and publications. There is also free Wi-Fi.'
    },
    studiovisits: {
      sectionName: 'Studio Visits',
      sectionBlurb: 'All Individual Members are eligible for studio visits with our visiting artists, critics, curators, and colleagues. We invite dozens of distinguished arts professionals to Baltimore every year and give them access to our Member Database to select their desired visits, in efforts to build continued dialogue, networking opportunities, and create discourse between our local constituency and the global arts community.'
    },
    equipmentlibrary: {
      sectionName: 'Equipment Library',
      sectionBlurb: 'Team Members can borrow museum-grade equipment from our library, including projects, monitors, speakers, and more. Team Members are also entitled to submit requested equipment to our Amazon Wishlist, which we will acquire when possible. Non-members can rent equipment for requested fees and should inquire directly.'
    },
    artistretreat: {
      sectionName: 'Artist Retreat',
      sectionBlurb: 'Our inaugural Artist Retreat will be hosted in August 2016 and will convene about 60 Baltimore artists and 30 national arts consultants including critics, curators, gallerists, and collectors, for three days of intensive professional development, community building, networking, and leisure. Membership is not required but there is an application fee for all non-members. Selections for the retreat will be made by a panel of museum staff and outside colleagues. The Artist Retreat is supported by the...'
    },
    gritfund: {
      sectionName: 'GritFund',
      sectionBlurb: 'The Grit Fund provides 8-12 grants in amounts between $1,000–$6,000, totaling $50,000 annually, to non-incorporated, artist-organized, collaborative initiatives in Baltimore City and County. There is no membership required or application fee to apply.'
    },
  },
}
export default Resources
