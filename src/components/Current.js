import React, { PropTypes } from 'react'

function Current({ children, src, currentBlurb }) {
  return (
    <div className="current">
      <div className="two columns title">
        <h3>Title of thing</h3>
        <h4>Maybe some other information if useful related to date, times, locations, etc.</h4>
      </div>
      <div className="five columns image">
        <img src={ src } />
      </div>
      <div className="five columns description">
        <p>Really long blurb about the thing</p>
        <p> { currentBlurb } </p>
      </div>
    </div>
  )
}

Current.propTypes = {
  children: PropTypes.node,
  currentBlurb: PropTypes.string,
  src: PropTypes.string,
}
Current.defaultProps = {
  src: 'http://contemporary.ookb.co/img/projects/2015-miriam-simun/ghostfood-init.jpg',
  currentBlurb: 'GhostFood explores eating in a future of biodiversity loss brought on by climate change. The GhostFood truck serves scent-food pairings consumed by patrons while wearing a device that adapts human physiology to enable taste experiences of unavailable foods. Inspired by insect physiology (insects use their antennae to smell and navigate their world) and long-standing human traditions of technological extension of the senses, the device inserts direct olfactory stimulation into the eating experience. Scents of foods threatened by climate change are paired with foods made from climate change-resilient foodstuffs, providing taste illusions of foods that may soon no longer be available. GhostFood staff serve the public, guiding visitors through this pre-nostalgic experience and engaging dialogue. This project is in collaboration with Miriam Songster. This Baltimore iteration of GhostFood is organized by The Contemporary in collaboration with students at Johns Hopkins University enrolled in “GhostFood: Curatorial Practicum with The Contemporary,” which runs Fall 2015.',
}

export default Current
