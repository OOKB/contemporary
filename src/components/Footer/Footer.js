import React, { Component, PropTypes } from 'react'

function Footer({blurb, social, sponsors}) {
  return (
    <footer>
      <div className="container">
        <div className=" bt3 pt2">
          <div className="group">
            <div className="sponsors twelve columns">
              <h6 className="mb0">Featured Sponsors</h6>
              <ul className="m0 list-reset">
                { sponsors && sponsors.map(({ href, src }) => (
                  <li><a href={href}><img src={src} /></a></li>
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
            <div className="social four columns offset-by-four text-right">
            { social && social.map(({ href, icon }, index) => (
              <a key={index} href={href} className="darkblue">
                <i className={`fa fa-lg ${ icon }`} />
              </a>
              ))
            }
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  sponsors: PropTypes.array.isRequired,
  social: PropTypes.array.isRequired,
  blurb: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
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
  social: [
    {
      "service":"Facebook",
      "href":"https://www.facebook.com/thecontemporarymuseum",
      "icon":"fa-facebook-square",
    },
    {
      "service":"Instagram",
      "href":"https://www.instagram.com/thecontemporary/",
      "icon":"fa-instagram",
    },
    {
      "service":"Twitter",
      "href":"https://twitter.com/ThContemporary",
      "icon":"fa-twitter-square ",
    },
    {
      "service":"Tumblr",
      "href":"http://thecontemporarymuseum.tumblr.com/",
      "icon":"fa-tumblr-square",
    },
    {
      "service":"Vimeo",
      "href":"https://vimeo.com/thecontemporarymuseum",
      "icon":"fa-vimeo-square",
    },
    {
      "service":"YouTube",
      "href":"https://www.youtube.com/channel/UCz7EO0hiR08D87j1mssO8Sw",
      "icon":"fa-youtube-square",
    },
  ],
}

export default Footer
