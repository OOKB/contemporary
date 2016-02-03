import { UPDATE_LOCATION } from '../router'

const initialState = {
  hash: undefined,
  location: undefined,
}

export default function reducer(state = initialState, action) {
  const { type, payload, _state } = action
  let location = state.location
  if (type === UPDATE_LOCATION) {
    location = payload
  }
  if (location !== state.location) {
    return { ...state, location }
  }
  return state
}

export function initBrowser() {
  // Send browser location info to be processed.
  const location = locationInfo(document.location)
  // console.log(location)
  const { route, hash, query } = location
  const routeId = get(route, 'id', 404)
  let page = defaultPageInfo.merge({ hash: hash.slice(1), query, routeId })
  if (route) {
    page = page.merge(route.params)
  }
  return page
}
