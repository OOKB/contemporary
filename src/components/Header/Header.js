import React, { Component, PropTypes } from 'react'

import Link from '../../containers/Link'
import Nav from './Nav'

function Header({ title, location, url }) {
  return (
    <header className="internal">
      <div className="container">
        <div className="clearfix">
          <h1 className="wordmark pull-left m0">
            <Link className="no-style" href={ url }>{ title }</Link>
          </h1>
          <div className="pull-right text-right">
            <p className="small m0">{ location }</p>
          </div>
        </div>

        <Nav />

      </div>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  url: PropTypes.string,
}
Header.defaultProps = {
  title: 'The Contemporary',
  location: 'In Baltimore, MD',
  url: '/'
}

export default Header
