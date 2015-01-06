React = require 'react'

Hero = require './hero'
Events = require './events'

module.exports = React.createClass
  render: ->

    {data} = @props

    <main>
      <Hero data={data} />
      <Events data={data} />
    </main>
