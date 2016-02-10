import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import Blurb from '../Blurb'

function About({ pageName, pageSection }) {
  return (
    <Page pageName={pageName}>
      <div className="group mb4">
        <div className="five columns">
          <h2>{pageSection.mission.sectionName}</h2>
          <div dangerouslySetInnerHTML={{ __html: pageSection.mission.sectionBlurb }} />
        </div>
        <div className="seven columns">
          <h2>{pageSection.history.sectionName}</h2>
          <div dangerouslySetInnerHTML={{ __html: pageSection.history.sectionBlurb }} />
        </div>
      </div>
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
      sectionBlurb: '<p class="lead">The Contemporary is a nomadic, non-collecting art museum in Baltimore, Maryland. Our mission expands the idea of a museum as an incubator that commissions site-specific and subject-oriented projects. We engage diverse audiences and advance contemporary art through projects and educational programming. <br/><br/>Our work is inspired by three guiding principles: <em>artists matter</em>, <em>collaboration is key</em>, and <em>audience is everywhere</em>.</p>'
    },
    history: {
      sectionName: 'History',
      sectionBlurb: '<p>In 1989, Baltimore curator George Ciscle founded The Contemporary in order to foster meaningful exchanges between artists, institutions, and diverse audiences. This nomadic institution quickly developed a reputation for delivering unexpected, challenging, and inspiring encounters with contemporary art by notable artists such as Willie Cole, Alison Saar, and Fred Wilson.</p><p>During its first decade, The Contemporary was “dedicated to redefining the concept of the museum.” It moved around the city of Baltimore, sponsoring exhibitions and projects in a variety of borrowed venues such as warehouses, car dealerships, and bus stations, as well as collaborating with partnering institutions such as the Baltimore Museum of Industry, Maryland Historical Society, Peabody Conservatory, and Walters Art Museum.</p><p>Because of the variety and ambition of its projects, programs, and operations, The Contemporary’s mission was continuously reviewed, adapted, and reinvented under various directors: Gary Sangster, Thom Collins, Irene Hofmann, and Sue Spaid. Thus the organization’s profile has continuously evolved in its 24-year history.</p><p>In 1999, The Contemporary rebranded as The Contemporary Museum and moved to 100 W. Centre Street, one block from the Walters Art Museum in the Mount Vernon neighborhood of downtown Baltimore. It organized exhibitions and related programming in that location for nearly ten years and worked with artists such as Dawoud Bey, Chris Burden, Dara Birnbaum, Louise Bourgeois, Futurefarmers, Ellen Gallagher, Felix Gonzalez-Torres, Isaac Julien, Christian Marclay, and Soledad Salamé. In 2011, the museum moved out of the W. Centre Street space and returned to the process of facilitating projects in neighboring institutions and buildings.</p><p>At a critical juncture, and consistent with the belief that the mission should be subject to review, the Board of Trustees suspended operations in May of 2012. An intensive reassessment process followed, ultimately leading to the reinstatement of the institution’s original vision of redefining the museum and the creation of a bold new organizational model.</p><p>Today, The Contemporary is a museum that willfully operates without a permanent collection or a building. Instead, we work with curators, both in Baltimore and beyond, to commission site- and situation-specific art projects that engage, challenge, and awe the people of Baltimore. We collaborate with different institutions, organizations, and individuals to offer dynamic programming that is tailored to both artists and the general public.'
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
