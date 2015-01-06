React = require 'react'

module.exports = React.createClass
  render: ->

    {firstname, lastname, position, content, filename, email, name} = @props.person
    fullName = name or "#{firstname} #{lastname}"
    imgSrc = "/img/headshot/#{filename}.jpg"

    if position
      Position = <h3>{position}</h3>

    if email
      Email = <div className="text-center email">{email}</div>

    <li className="col-xs-4 col-sm-3 col-md-2 bio">
      <img src={imgSrc} className="img-circle" />
      <h2>{fullName}</h2>
      {Position}
      {Email}
      <div className="bio-content" dangerouslySetInnerHTML={{__html:content}} style={display:'none'} />
    </li>
