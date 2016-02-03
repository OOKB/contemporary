import get from 'lodash/get'
import isString from 'lodash/isString'
import set from 'lodash/set'

// Sure, you could parse the url all the damn time and calculate the state slice.
// I want to get away from the idea of having a location object.
// Changing url should change state. I think of it like an action creator.

// Constants
export const TRANSITION = '@@router/TRANSITION'
export const UPDATE_LOCATION = '@@router/UPDATE_LOCATION'
export const UPDATE_HASH = '@@router/UPDATE_HASH'

const LOCATION_PATH = [ 'routing', 'location' ]
const DEFAULT_TRANSITION_METHOD = 'pushState'

function transition(method) {
  return (...args) => ({
    type: TRANSITION,
    payload: { method, args },
  })
}

export const push = transition('pushState')
export const replace = transition('replaceState')
export const go = transition('go')
export const goBack = transition('back')
export const goForward = transition('forward')

export const routeActions = { push, replace, go, goBack, goForward }

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: isString(location) ? { location } : location,
  }
}
// export function updateHash(hash) {
//   return {
//     type: UPDATE_HASH,
//     payload: hash,
//   }
// }

// Send an action on every hash change.
// function hashChange(dispatch) {
//   window.addEventListener('hashchange', () => {
//     dispatch(updateLocation({
//       hash: window.location.hash,
//     }))
//   }, false)
// }

// Send an action on every history change.
// Forward / Back
function historyChange(location, dispatch) {
  window.addEventListener('popstate', () => {
    // console.log('historyChange', event)
    dispatch(updateLocation(location))
  }, false)
}

export default function routerStoreEnhancer(getRoutes, options = {}) {
  const locationPath = options.locationPath || LOCATION_PATH
  const defaultTransition = options.defaultTransition || DEFAULT_TRANSITION_METHOD
  const history = options.history || window.history
  const location = options.location || document.location

  return createStore => (reducer, initialState, enhancer) => {
    let previousLocation = undefined
    let nextTransitionMethod = defaultTransition

    const { dispatch, ...store } = createStore(reducer, initialState, enhancer)

    const router = getRoutes({ getState: store.getState, dispatch })

    historyChange(location, dispatch)
    // Update URL to reflect change of location string.
    store.subscribe(() => {
      // Grab the location string from state.
      const newLocation = get(store.getState(), locationPath)
      // See if it has changed.
      if (newLocation !== previousLocation) {
        previousLocation = newLocation
        history[nextTransitionMethod](newLocation)
        nextTransitionMethod = defaultTransition
      }
    })

    function _dispatch(action) {
      // Listen to every action and save it's transitionMethod.
      nextTransitionMethod = get(action, [ 'meta', 'transitionMethod' ], nextTransitionMethod)
      if (action.type === UPDATE_LOCATION) {
        return dispatch({
          ...action,
          payload: router.locationInfo(action.payload),
        })
      }
      if (action.type !== TRANSITION) {
        return dispatch(action)
      }
      // Allow an action to initate addressbar change.
      const { payload: { method, args } } = action
      history[method](...args)
    }

    // Set initialState.
    _dispatch(updateLocation(location))

    return {
      ...store,
      dispatch: _dispatch,
    }
  }
}
