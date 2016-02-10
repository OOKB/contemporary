import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'

function About({ pageName, pageSection }) {
  return (
    <Page pageName={pageName}>
      <Row sectionName={pageSection.staff.sectionName} />
      <Row sectionName={pageSection.board.sectionName} />
      <Row sectionName={pageSection.curatorialcouncil.sectionName} />
    </Page>
  )
}

About.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
About.defaultProps = {
  pageName: 'About',
  pageSection: {
    mission: {
      sectionName: 'Mission',
    },
    history: {
      sectionName: 'History',
    },
    staff: {
      sectionName: 'Staff',
    },
    board: {
      sectionName: "Board",
    },
    curatorialcouncil: {
      sectionName: "Curatorial Council",
    },
  },
}
export default About
