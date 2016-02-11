import React, { Component, PropTypes } from 'react'

function SocialLinks({ social, className }) {
  return (
    <div className={className} >
      { social && social.map(({ href, icon }, index) => (
        <a key={index} href={href} className="darkblue">
          <i className={`fa fa-lg ${ icon }`} />
        </a>
        ))
      }
    </div>
  )
}

SocialLinks.propTypes = {
  social: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
  })).isRequired,
}

SocialLinks.defaultProps = {
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

export default SocialLinks
