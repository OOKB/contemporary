import React, { PropTypes } from 'react'

import { Link } from 'redux-history-sync'

function Drawer({ primary, sublink }) {
  return (
    <div className="drawer bg-white">
      <div className="three columns blurb">
        <p dangerouslySetInnerHTML={{ __html: primary }} />
      </div>
      <ul className="eight columns offset-by-one sub-menu list-reset">
        { sublink && sublink.map(({ title, url, secondary }, index) => (
          <li className="group" key={index}>
            <p className="four columns">
              <Link className="sub-link" href={ url }>{ title }</Link>
            </p>
            <p
              className="eight columns secondary"
              dangerouslySetInnerHTML={{ __html: secondary }}
            />
          </li>
          ))
        }
      </ul>
    </div>
  )
}

Drawer.propTypes = {
  primary: PropTypes.string.isRequired,
  sublink: PropTypes.array,
}

export default Drawer
