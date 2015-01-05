React = require 'react'

Head = require './head/head'
Main = require './main/main'
About = require './about/about'
Foot = require './foot/foot'

module.exports = React.createClass
  render: ->
    {title} = @props.data

    <html>
      <head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="assets/app.css" />
      </head>
      <body>
        <div id="wrapper">
          <Head data={@props.data} />
          <Main data={@props.data} />
          <About data={@props.data} />
          <Foot data={@props.data} />
        </div>
        <script src="/assets/app.js" />
      </body>
    </html>
