React = require 'react'
_ = require 'queries'
Router = require 'react-router'
{Route, DefaultRoute} = Router

data = require './data'
data.content = require './data/content'

Index = require './view/index'
Main = require './view/main/main'
About = require './view/about/about'

inBrowser = typeof window isnt "undefined"

App = (vars, render) ->
  props =
    name: 'app'
    handler: Index
    path: vars.path or '/'

  routes =
    <Route name="app" path="/" handler={Index}>
      <Route name="about" path="/about/" handler={About} />
      <DefaultRoute handler={Main}/>
    </Route>

  Render = (Handler) ->
    render Handler, {data: data, vars: vars}

  if inBrowser
    Router.run routes, Router.HistoryLocation, Render
  else
    Router.run routes, props.path, Render

if inBrowser
  window.onload = -> # Attach event handlers.
    # Attach app to global window var as app.
    window.app =
      db: data # Our database.
    render = (Handler, props) ->
      React.render React.createElement(Handler, props), document
    App {}, render

module.exports = App
