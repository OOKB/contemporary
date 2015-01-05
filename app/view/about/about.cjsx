React = require 'react'

Board = require './board'

module.exports = React.createClass
  render: ->

    {data} = @props

    <main>
      <Board board={data.content.board} />
    </main>
