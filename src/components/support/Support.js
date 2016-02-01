import React, { PropTypes } from 'react'

import Membership from '../../containers/Membership'
import Row from './Row'
import Blurb from './Blurb'

// Basic suggestion button.
function Support({ pageName, pageSection, pageSections }) {
  return (
    <div className="container">
      <h1>{ pageName }</h1>
      <Row {...pageSection.membership}>
        <Membership />
      </Row>
      { pageSections && pageSections.map(({ sectionName, sectionBlurb }, index) => (
        <Row key={index} sectionName={sectionName}>
          <Blurb sectionBlurb={sectionBlurb} />
        </Row>
        ))
      }
    </div>
  )
}

Support.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSections: PropTypes.array.isRequired,
}
Support.defaultProps = {
  pageName: 'Support',
  pageSection: {
    membership: {
      sectionName: 'Membership',
    },
  },
  pageSections: [
    {
      "sectionName": "Donate",
      "sectionBlurb": "The Contemporary relies on your donation to keep our operation up and running! The impact of your gift is major. Contributions of any size can make a huge difference in helping us bring our projects and educational outreach to life. Since your donation will support our mission, it is 100% tax-deductible.",
    },
    {
      "sectionName": "Wishlist",
      "sectionBlurb": "We have organized an Amazon Wishlist that is shared with our Members in efforts to grow our book and equipment libraries. All purchases made here benefit The Contemporary as well as Baltimore’s arts community.",
    },
    {
      "sectionName": "Supporters",
      "sectionBlurb": "We are immeasurably grateful to those who have made contributions in support of our operations and programming.",
    },
  ],
}
export default Support
