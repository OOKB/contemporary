import * as ActionTypes from './actions'
import merge from 'lodash/merge'
import { combineReducers } from 'redux'

import db from './modules/db'
import filter from './modules/filter'
import form from './modules/editField'
import routing from './modules/routing'
import socket, { idReducer as id } from './modules/socket'
import stripe from './modules/stripe'

export defaultState from './defaultState'

// Updates an entity cache in response to any action with response.entities.
// Define our default entities collection database.
const defaultEntityState = {}
function entity(state = defaultEntityState, action) {
  if (action.response && action.response.entity) {
    return merge({}, state, action.response.entity)
  }
  return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
  const { type, error } = action

  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return action.error
  }

  return state
}

const rootReducer = combineReducers({
  db,
  entity,
  errorMessage,
  filter,
  form,
  id,
  routing,
  socket,
  stripe,
})

export default rootReducer
