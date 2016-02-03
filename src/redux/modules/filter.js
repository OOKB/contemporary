import immutable from 'seamless-immutable'
import get from 'lodash/get'
import isString from 'lodash/isString'
import omit from 'lodash/omit'
import pick from 'lodash/pick'

import { UPDATE_LOCATION } from '../history'
export const REPLACE_SUBJECT = 'filter/REPLACE_SUBJECT'
export const UPDATE = 'filter/UPDATE'
export const UPDATE_CLOSE = 'filter/UPDATE_CLOSE'
export const UPDATE_SUBJECT = 'filter/UPDATE_SUBJECT'

// Not sure if this belongs here or what.
export const defaultPageInfo = immutable({
  hash: null,
  position: 0,
  routeId: 'default',
  query: {},
})

const defaultState = immutable({
  primarySubject: null,
  subject: null,
  entityId: null,
})

function subjectFields(payload) {
  return pick(payload, 'primarySubject', 'subject', 'entityId')
}

export default function reducer(_state = defaultState, action) {
  const { type, payload } = action
  if (!type) return _state
  const state = _state.asMutable ? _state : immutable(_state)

  switch (type) {
    case REPLACE_SUBJECT:
      return state.set('page', defaultPageInfo.merge(payload))
    case UPDATE:
      return state.setIn(payload.path, payload.value)
    case UPDATE_CLOSE:
      const newVal = get(state, payload.path).merge({
        option: payload.value,
        active: false,
      })
      return state.setIn(payload.path, newVal)
    case UPDATE_LOCATION:
      return payload.params ? subjectFields(payload.params) : state
    case UPDATE_SUBJECT:
      return state.merge(subjectFields(payload))
    default:
      if (action.response && action.response.filter) {
        return state.merge(omit(action.response.filter, 'page'))
      }
      return state
  }
}

function getStateSlice(state) {
  return state.filter
}
export function getFilter(state, path) {
  return get(getStateSlice(state), path, null)
}
export function replaceSubject(info) {
  const payload = isString(info) ? { id: info } : info
  return {
    type: REPLACE_SUBJECT,
    payload,
  }
}

export function updateSubject(info) {
  if (isString(info)) return replaceSubject(info)
  return {
    type: UPDATE_SUBJECT,
    payload: info,
  }
}

export function update(groupId, filterType, propertyId, value) {
  return {
    payload: { path: [ groupId, filterType, propertyId ], value },
    type: UPDATE,
  }
}

export function updateAndClose(groupId, fieldId, value) {
  return {
    payload: { path: [ groupId, fieldId ], value },
    type: UPDATE_CLOSE,
  }
}

export function toggle(groupId, filterType, newValue = true) {
  return (dispatch, getState) => {
    const oldValue = getFilter(getState(), [ groupId, filterType, 'active' ])
    const value = newValue === oldValue ? false : newValue
    return dispatch(update(groupId, filterType, 'active', value))
  }
}

export function handleSearch(groupId, filterType, newTxt) {
  return update(groupId, filterType, 'value', newTxt.toLowerCase())
}
