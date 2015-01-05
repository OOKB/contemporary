React = require 'react'

AboutPeople = require './board'

module.exports = React.createClass
  render: ->

    {data} = @props
    {board} = data.content
    council = data.content['curatorial-advisory-council']

    <main>
      <AboutPeople people={council} id="council" title="Curatorial Advisory Council." />
      <AboutPeople people={board} id="board" title="Board." />
    </main>
