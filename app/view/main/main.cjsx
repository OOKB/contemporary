React = require 'react'

Hero = require './hero'
Contact = require './contact'

module.exports = React.createClass
  render: ->

    {data} = @props

    <main>
      <Hero data={data} />
      <Contact data={data} />
    </main>
