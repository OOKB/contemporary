import React, { PropTypes } from 'react'

function ContentBlock({ sectionName, url, bgColor }) {
  const innerClass = "inner tile imged bg-" + `${ bgColor }`
  return (
    <div className="three columns">
      <div className={innerClass} >
        <a href={ url } className="bigBlock">
          <h2>{ sectionName }</h2>
        </a>
      </div>
    </div>
  )
}

ContentBlock.propTypes = {
}

export default ContentBlock
