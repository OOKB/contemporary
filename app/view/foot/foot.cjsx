React = require 'react'

module.exports = React.createClass
  render: ->

    {title, tagline} = @props.data
    yr = new Date().getFullYear()
    msg = "copyright #{yr} — #{title} — #{tagline}"

    <footer>
      <p>{msg}</p>
    </footer>
