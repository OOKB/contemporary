import React, { PropTypes } from 'react'

// Basic suggestion button.
function Blurb({ sectionBlurb }) {
  return (
    <div className="group mb4">
      <div className="six columns">
        <p>{ sectionBlurb }</p>
        { children }
      </div>
    </div>
  )
}

Blurb.propTypes = {
  children: PropTypes.node,
  sectionBlurb: PropTypes.string.isRequired,
}

export default Blurb
