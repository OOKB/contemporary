import React, { PropTypes } from 'react'

function ContentBlock({ sectionName, url, bgColor, bgImage }) {
  const innerClass = "inner tile imged bg-" + `${ bgColor }`
  return (
    <div className="six columns">
      <div
        className={innerClass}
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <a href={ url } className="bigBlock">
          <h2 className="hidden">{ sectionName }</h2>
        </a>
      </div>
    </div>
  )
}

ContentBlock.propTypes = {
}

export default ContentBlock
