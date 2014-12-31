React = require 'react'

Sponsors = require './sponsors'

module.exports = React.createClass
  render: ->
    {data} = @props
    {title, tagline, since} = data
    yr = new Date().getFullYear()
    msg = "\u00a9 Copyright #{since}-#{yr}, #{title}"

    <footer>
      <Sponsors data={data} />
      <p>{msg}</p>
    </footer>
