import React, { PropTypes } from 'react'

import LogoBlock from './LogoBlock'
import ContentBlock from './ContentBlock'
import BigBlock from './BigBlock'
import SlideshowBlock from './SlideshowBlock'

function HomepageBlocks({ sectionName, blocks }) {
  return (
    <div>
      <div className="group">
        <LogoBlock>
          <ContentBlock sectionName={blocks.artistretreat.sectionName} url={blocks.artistretreat.url} bgColor={blocks.artistretreat.bgColor} />
        </LogoBlock>
        <SlideshowBlock />
      </div>
      <div className="group">
        <BigBlock sectionName={blocks.gritfund.sectionName} url={blocks.gritfund.url} bgColor={blocks.gritfund.bgColor} bgImage={blocks.gritfund.bgImage} />
        <ContentBlock sectionName={blocks.membership.sectionName} url={blocks.membership.url} bgColor={blocks.membership.bgColor} />
        <ContentBlock sectionName={blocks.mailinglist.sectionName} url={blocks.mailinglist.url} bgColor={blocks.mailinglist.bgColor} />
        <ContentBlock sectionName={blocks.donate.sectionName} url={blocks.donate.url} bgColor={blocks.donate.bgColor} />
        <ContentBlock sectionName={blocks.contact.sectionName} url={blocks.contact.url} bgColor={blocks.contact.bgColor} />
      </div>
    </div>
  )
}

HomepageBlocks.propTypes = {
  blocks: PropTypes.array,
}

export default HomepageBlocks
