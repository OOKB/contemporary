import React, { PropTypes } from 'react'

function Blurb({ children, sectionBlurb }) {
  return (
    <div className="six columns">
      <p dangerouslySetInnerHTML={{ __html: sectionBlurb }} />
      { children }
    </div>
  )
}

Blurb.propTypes = {
  children: PropTypes.node,
  sectionBlurb: PropTypes.string.isRequired,
}

export default Blurb
