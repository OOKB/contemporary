// Redux.
import { applyMiddleware, createStore, compose } from 'redux'
import merge from 'lodash/merge'
// Redux Middleware.
// Allow function action creators.
import thunk from 'redux-thunk'
// Log state changes to console.
// import createLogger from 'redux-logger'
// Socket.io linking
import createSocketMiddleware from './middleware/socket'
const socket = createSocketMiddleware()

import defaultState from './defaultState'
// Redux Reducers.
// Our reducer index.
import rootReducer from './reducer'

import history from './history'
import getRoutes from './routes'

// Redux Dev stuff.
// The redux state sidebar thing store enhancer.
import DevTools from '../containers/DevTools'

// Define the middeware we want to apply to the store.
const middleware = [
  socket,
  thunk,
]

const finalCreateStore = compose(
  history(getRoutes),
  applyMiddleware(...middleware),
  // Logger must be last middleware in chain(#20).
  // applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

// Configure and create Redux store.
// Allow the function to accept an initialState object.
export default function configureStore(initialState = {}) {
  const store = finalCreateStore(rootReducer, merge(initialState, defaultState))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
