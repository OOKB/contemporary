React = require 'react'

module.exports = React.createClass
  render: ->
    {featuredSponsors} = @props.data

    FeaturedSponsors = for sponsor, i in featuredSponsors
      {name, url, img, ext} = sponsor
      url = if url then "http://#{url}" else false
      ext = ext or '.png'
      imgPath = "/img/sponsors/#{img}-bw#{ext}"

      Content = <img src={imgPath} alt=name />
      if url
        Content = <a href={url}>{Content}</a>

      <li key={img} title={name}>
        {Content}
      </li>

    <div className="row">
      <div className="sponsors col-xs-12">
        <h4>Featured Sponsors</h4>
        <ul>
          {FeaturedSponsors}
        </ul>
      </div>
    </div>
