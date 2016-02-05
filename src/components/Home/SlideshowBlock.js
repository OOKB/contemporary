import React, { PropTypes } from 'react'

function SlideshowBlock({  }) {
  const backgroundImage = 'http://contemporary.ookb.co/img/ghostfood.jpg'
  return (
    <div className="nine columns">
      <div id="slideshow-wrap" className="cycle-slideshow">
        <div className="item">
          <div
            className="inner tile imged bg-black"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <a href="/projects/ghostfood/" className="bigBlock">
              <h1>GhostFood</h1>
              <p className="blurb"></p>
            </a>
          </div>
        </div>
      </div>
      <div className="controls">
        <div className="prevControl">
          <i className="fa fa-angle-left fa-4x">
            <span className="hidden">Left/Previous</span>
          </i>
        </div>
        <div className="nextControl">
          <i className="fa fa-angle-right fa-4x">
            <span className="hidden">Right/Next</span>
          </i>
        </div>
      </div>
    </div>
  )
}

SlideshowBlock.propTypes = {
}

export default SlideshowBlock
