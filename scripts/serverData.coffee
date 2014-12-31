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

  if data.instagram
    url = "http://social.cape.io/instagram/#{data.instagram}"
    getData.insta = makeReq url

  if data.googlesheet
    getData.members = gSheetReq data.googlesheet, 1
    getData.bars = gSheetReq data.googlesheet, 2

  save = (err, serverData) ->
    throw err if err
    {fb, insta, members, bars} = serverData
    # console.log serverData
    data.fb = fb
    if fb and fb.name
      data.title = fb.name
      data.mission = fb.mission

    # MEMBERS
    bars = _.indexBy bars, 'name'
    data.members = _.map members, (member) ->
      # Put the bar fields into a single array and map to bars sheet.
      member.bars = [member.bar1, member.bar2, member.bar3].map (bar) ->
        if bars[bar] then return bars[bar] else return undefined
      # Clean up empty fields. Not sure this is needed.
      member.bars = _.compact member.bars
      # Remove fields from obj we don't need.
      _.without member, ['bar1', 'bar2', 'bar3', 'membernumber']

    # data.coverImg = _.rename fb.cover.images[0], {source: 'url'}
    # key = process.env.IMGIX_CAPE
    # domain = 'cape.imgix.net'
    # ops =
    #   h: 480
    #   w: Math.min(data.coverImg.width, 900)
    #   fit: 'crop'
    # data.coverImg.url = imgix domain, key, data.coverImg.url, ops

    fs.outputJsonSync 'app/data/index.json', data
    if _.isFunction callback
      callback()

  async.parallel getData, save


# req = gSheetReq('18Rh1RV0znH9Ey_eRzN76JKNaXspfrvHV6hZMrGZYczI', '1') (err, data) ->
#   console.log data
