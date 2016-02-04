import React, { PropTypes } from 'react'

function ContentBlock({  }) {
  return (
    <div className="three columns">
      <div className="inner tile imged bg-color">
        <a href="{ url }" className="bigBlock">
          {/*{{#big}}<!--nothing-->{{/big}}{{^big}}<h2>{{title}}</h2>{{/big}}*/}
          <p>something contenty</p>
        </a>
      </div>
    </div>
  )
}

ContentBlock.propTypes = {
}

export default ContentBlock
