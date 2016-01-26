import React, { Component, PropTypes } from 'react'

function Drawer({ primary }) {
  return (
    <div className="drawer bg-white">
      <div className="three columns blurb">
        <p>Content. { primary }</p>
      </div>
      <ul className="eight columns offset-by-one sub-menu list-reset">
        <p>some sort of map</p>
      </ul>
    </div>
  )
}

Drawer.propTypes = {
  primary: PropTypes.string.isRequired,
}

export default Drawer
