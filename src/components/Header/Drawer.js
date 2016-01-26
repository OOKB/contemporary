import React, { Component, PropTypes } from 'react'

function Drawer({ primary, sublink }) {
  return (
    <div className="drawer bg-white">
      <div className="three columns blurb">
        <p>{ primary }</p>
      </div>
      <ul className="eight columns offset-by-one sub-menu list-reset">
        { sublink && sublink.map(({ title, url, secondary }) => (
          <li className="mainlink evenly-spread drop-down">
            <li className="group">
              <p className="four columns">
                <a className="sub-link" href="{ url }">{ title }</a>
              </p>
              <p className="eight columns secondary">
                { secondary }
              </p>
            </li>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

Drawer.propTypes = {
  primary: PropTypes.string.isRequired,
  sublink: PropTypes.array.isRequired,
}

export default Drawer
