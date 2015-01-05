React = require 'react'

Member = require './boardMember'

module.exports = React.createClass
  render: ->

    {board} = @props

    BoardMembers = for person, i in board
      {filename} = person

      <Member key={filename} person={person} />

    <article id="board" className="toggle border-top">
      <h2>Board.</h2>
      <ul className="row add-top">
        {BoardMembers}
      </ul>
    </article>
