import React, { PropTypes } from 'react'

import ContentBlock from './ContentBlock'
import SlideshowBlock from './SlideshowBlock'

function HomepageBlocks({ }) {
  return (
    <div className="group">
      <ContentBlock />
      <SlideshowBlock />
      <ContentBlock />
      <ContentBlock />
      <ContentBlock />
      <ContentBlock />
      <ContentBlock />
    </div>
  )
}

HomepageBlocks.propTypes = {
}

export default HomepageBlocks
