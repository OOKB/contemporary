React = require 'react'

module.exports = React.createClass
  render: ->

    {firstname, lastname, position, content, filename} = @props.person
    fullName = "#{firstname} #{lastname}"
    imgSrc = "img/headshot/#{filename}.jpg"

    if position
      Position = <h3>{position}</h3>

    <li className="col-xs-4 col-sm-3 col-md-2 bio" style={{height: 198}}>
      <img src={imgSrc} className="img-circle" />
      <h2>{fullName}</h2>
      {Position}
      <div className="bio-content" dangerouslySetInnerHTML={{__html:content}} />
    </li>
