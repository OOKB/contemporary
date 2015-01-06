React = require 'react'

{Nav} = require 'react-bootstrap'
{NavItemLink} = require 'react-router-bootstrap'

module.exports = React.createClass
  render: ->
    <Nav>
      <NavItemLink to="app">Home</NavItemLink>
      <NavItemLink to="about">About</NavItemLink>
    </Nav>
