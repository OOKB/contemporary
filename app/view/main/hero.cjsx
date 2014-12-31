React = require 'react'

module.exports = React.createClass
  render: ->

    {title} = @props.data

    <section id="hero">
      <img src="logo.png" alt="{title}" />
    </section>
