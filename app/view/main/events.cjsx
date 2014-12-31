React = require 'react'

module.exports = React.createClass
  render: ->
    {events} = @props.data

    <section id="events">
      <h3>Events</h3>
      <div className="group">
      </div>
    </section>
