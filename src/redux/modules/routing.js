import immutable from 'seamless-immutable'
import { UPDATE_LOCATION } from '../history'
import omit from 'lodash/omit'

const initialState = immutable({})

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_LOCATION:
      return state.merge(omit(payload, 'meta', 'state'))
    default:
      return state
  }
  return state
}
