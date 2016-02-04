import React, { PropTypes } from 'react'

import Membership from '../../containers/Membership'
import Row from '../Row'
import Donate from './Donate'
import Wishlist from './Wishlist'
import Page from '../Page'
import Supporters from './Supporters'

function Support({ pageName, pageSection }) {
  return (
    <Page pageName={pageName}>
      <Row sectionName={pageSection.donate.sectionName}>
        <Donate sectionBlurb={pageSection.donate.sectionBlurb}/>
      </Row>
      <Row {...pageSection.membership}>
        <Membership />
      </Row>
      <Row sectionName={pageSection.wishlist.sectionName}>
        <Wishlist sectionBlurb={pageSection.wishlist.sectionBlurb}/>
      </Row>
      <Row sectionName={pageSection.supporters.sectionName}>
        <Supporters sectionBlurb={pageSection.supporters.sectionBlurb}/>
      </Row>
    </Page>
  )
}

Support.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
Support.defaultProps = {
  pageName: 'Support',
  pageSection: {
    membership: {
      sectionName: 'Membership',
    },
    donate: {
      sectionName: "Donate",
      sectionBlurb: "The Contemporary relies on your donation to keep our operation up and running! The impact of your gift is major. Contributions of any size can make a huge difference in helping us bring our projects and educational outreach to life. Since your donation will support our mission, it is 100% tax-deductible. <br/><br/>If your prefer, checks can be mailed to The Contemporary. Please make checks payable to The Contemporary and send to:<br/><br/>The Contemporary<br/>PO Box 1572<br/>Baltimore, MD 21203",
    },
    wishlist: {
      sectionName: "Wishlist",
      sectionBlurb: "We have organized an Amazon Wishlist that is shared with our Members in efforts to grow our book and equipment libraries. All purchases made here benefit The Contemporary as well as Baltimore’s arts community.",
    },
    supporters: {
      sectionName: "Supporters",
      sectionBlurb: "We are immeasurably grateful to those who have made contributions in support of our operations and programming.",
    },
  },
}
export default Support
