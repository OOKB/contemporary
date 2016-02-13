import { combineReducers } from 'redux'

import db from './modules/db'
import entity from './modules/entity'
import errorMessage from './modules/errorMessage'
import filter from './modules/filter'
import form from 'redux-field'
import { historyReducer as history } from 'redux-history-sync'
import socket, { idReducer as id } from 'cape-redux-socket'
import stripe from './modules/stripe'

export defaultState from './defaultState'

const rootReducer = combineReducers({
  db,
  entity,
  errorMessage,
  filter,
  form,
  history,
  id,
  socket,
  stripe,
})

export default rootReducer
