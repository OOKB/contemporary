React = require 'react'

Nav = require './nav'

module.exports = React.createClass
  render: ->

    {title} = @props.data

    <header className="navbar" role="banner">
      <div id="upperdeck">
        <h1>{title}</h1>
        <section className="description col-sm-4">
          <p><strong>The Contemporary</strong> is a nomadic, non-collecting art museum in Baltimore, Maryland, guided by three main principles: <em>artists matter</em>, <em>collaboration is key</em>, and <em>audience is everywhere</em>.</p>
          <p>some clever sentence about how we do not have hours or location unless posted under a specific exhibition on the calendar...</p>
        </section>
      </div>
      <div id="lowerdeck">
        <Nav data={@props.data} />
      </div>
    </header>
