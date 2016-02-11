import React, { Component, PropTypes } from 'react'

import SocialLinks from '../SocialLinks'

function Footer({ blurb, sponsors }) {
  return (
    <footer>
      <div className="container">
        <div className=" bt3 pt2">
          <div className="group">
            <div className="sponsors twelve columns">
              <h6 className="mb0">Featured Sponsors</h6>
              <ul className="m0 list-reset">
                { sponsors && sponsors.map(({ href, src }, index) => (
                  <li key={index}><a href={href}><img src={src} /></a></li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className=" bt3 py2">
          <div className="group">
            <p className="four columns">
              { blurb }
            </p>
            <SocialLinks className="social four columns offset-by-four text-right" />
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  sponsors: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  blurb: PropTypes.string.isRequired,
}

Footer.defaultProps = {
  blurb: 'Unless otherwise noted, all work, images, text, etc. is Copyright © 1989–2016 The Contemporary',
  sponsors: [
    {
      "href": "http://www.warholfoundation.org/",
      "src":"/img/sponsors/warhol-bw.png",
    },
    {
      "href": "http://www.rwdfoundation.org/",
      "src":"/img/sponsors/rwdf-bw.png",
    },
    {
      "href": "http://www.strausfoundation.org/",
      "src":"/img/sponsors/straus-bw.png",
    },
    {
      "href": "http://www.bsfa.org/",
      "src":"/img/sponsors/bsfta-bw.png",
    },
    {
      "href": "http://www.ihg.com/hotelindigo/hotels/us/en/baltimore/balhn/hoteldetail",
      "src":"/img/sponsors/hotelindigo.png",
    },
  ],
}

export default Footer
