import immutable from 'seamless-immutable'
import get from 'lodash/get'
import isString from 'lodash/isString'

export const REPLACE_SUBJECT = 'filter/REPLACE_SUBJECT'
export const UPDATE = 'filter/UPDATE'
export const UPDATE_CLOSE = 'filter/UPDATE_CLOSE'
export const UPDATE_SUBJECT = 'filter/UPDATE_SUBJECT'

export const defaultPageInfo = immutable({
  hash: null,
  position: 0,
  primarySubject: 'home',
  subject: null,
  id: null,
})

const defaultState = immutable({
  page: defaultPageInfo,
})

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
    case UPDATE_SUBJECT:
      return state.set('page', state.page.merge(payload))
    default:
      return state
  }
}

export function replaceSubject(info) {
  const payload = isString(info) ? { primarySubject: info } : info
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

export function toggle(groupId, filterType) {
  return (dispatch, getState) => {
    const value = !get(getState().filter, [ groupId, filterType, 'active' ])
    return dispatch(update(groupId, filterType, 'active', value))
  }
}

export function handleSearch(groupId, filterType, newTxt) {
  return update(groupId, filterType, 'value', newTxt.toLowerCase())
}