import React, { Component, PropTypes } from 'react'

import Nav from './Nav'

function Header({ title, location }) {
  return (
    <header className="internal">
      <div className="container">
        <div className="clearfix">
          <h1 className="wordmark pull-left m0">{ title }</h1>
          <div className="pull-right text-right">
            <p className="small m0">{ location }</p>
          </div>
        </div>

        <Nav />

      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}
Header.defaultProps = {
  title: 'The Contemporary',
  location: 'In Baltimore, MD',
}

export default Header
