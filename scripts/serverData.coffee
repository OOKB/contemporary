r = require 'request'
_ = require 'queries'
async = require 'async'
fs = require 'fs-extra'
imgix = require './imgix'

makeReq = (url, handleData) ->
  (cb) ->
    console.log 'requesting', url
    r url, (err, resp, body) ->
      unless err
        body = JSON.parse body
        if _.isFunction handleData
          console.log 'process data', url
          body = handleData body
      cb err, body

gSheetReq = (id, sheet) ->
  url = "https://spreadsheets.google.com/feeds/list/#{id}/#{sheet}/public/values?alt=json"
  handleData = (data) ->
    if data and data.feed and data.feed.entry
      rows = data.feed.entry
      fieldIds = _.filter _.keys(rows[0]), (id) ->
        id.substr(0, 4) == 'gsx$'
      pluckObj = {}
      _.each fieldIds, (id) ->
        newKey = id.substr 4
        oldKey = "#{id}.$t"
        pluckObj[newKey] = oldKey
      # console.log pluckObj
      data = _.pluck rows, pluckObj
      #console.log data
    return data
  makeReq url, handleData

module.exports = (callback) ->
  data = fs.readJsonSync 'app/data/data.json'
  unless data
    callback()
    return

  getData = {}

  if data.facebook
    url = "http://social.cape.io/facebook/#{data.facebook}"
    handleData = (data) ->
      if data.cover and data.cover.images[0]
        data.coverImg = _.rename data.cover.images[0], {source: 'url'}
      return data

    getData.fb = makeReq url, handleData
    url = "http://social.cape.io/facebook/#{data.facebook}/events"
    getData.events = makeReq url

  if data.instagram
    url = "http://social.cape.io/instagram/#{data.instagram}"
    getData.insta = makeReq url

  #if data.googlesheet
    #getData.members = gSheetReq data.googlesheet, 1
    #getData.bars = gSheetReq data.googlesheet, 2

  save = (err, serverData) ->
    throw err if err
    {fb, insta, events} = serverData
    # console.log serverData
    data.fb = fb
    if fb and fb.name
      data.title = fb.name
      data.mission = fb.mission
      data.description = fb.description
      data.about = fb.about
      data.phone = fb.phone
    if events and events.data
      data.events = events.data

    fs.outputJsonSync 'app/data/index.json', data
    if _.isFunction callback
      callback()

  async.parallel getData, save


# req = gSheetReq('18Rh1RV0znH9Ey_eRzN76JKNaXspfrvHV6hZMrGZYczI', '1') (err, data) ->
#   console.log data
