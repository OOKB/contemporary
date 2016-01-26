import io from 'socket.io-client'
import { parse } from 'query-string'
import isString from 'lodash/isString'

import { connect, disconnect, joined } from '../modules/socket'

function getSessionId() {
  return sessionStorage.sessionId || null
}
// Insert sessionId.
function setSessionId(id) {
  sessionStorage.sessionId = id
}
// Should save presenter to sessionStorage too.

export default function createSocketIoMiddleware(options = {}) {
  // Defaults.
  const opts = Object.assign({
    eventName: 'action',
  }, options)

  // Socket.io
  const socket = io('http://contemporary.l.cape.io/')

  return store => {
    // Wire socket.io to dispatch actions sent by the server.
    socket.on(opts.eventName, (action) => {
      const act = action
      // If an action comes from the server do not send it back to the server.
      act.sendSocket = false
      store.dispatch(act)
    })
    // When the connection is established. Before any events.
    socket.on('connect', () => {
      // Tell local state we are connected.
      store.dispatch(connect({
        // Send url query information.
        ...parse(document.location.search),
        pathname: document.location.pathname,
        // Tell server result of our local sessionId.
        sessionId: getSessionId(),
      }))
    })
    // Joined. Server returns valid sessionId.
    socket.on('joined', ({ sessionId }) => {
      setSessionId(sessionId)
      store.dispatch(joined(sessionId))
    })
    // Tell redux we are no longer connected.
    socket.on('disconnect', () => {
      store.dispatch(disconnect())
    })

    return next => action => {
      const { emit, sendSocket, type, payload } = action
      // We do not care about any action without type prop set.
      if (!type) return next(action)
      // Pass along any action with sendSocket set to false.
      if (sendSocket === false || type.endsWith('_SUCCESS')) {
        return next(action)
      }
      // Allow actions to send an emit to server.
      if (isString(sendSocket)) {
        socket.emit(sendSocket, emit || payload)
      }
      // Prevent location actions from trigger.
      if (store.getState().socket.presenter) {
        console.log('Subscribe mode prevented local action', type)
      } else {
        // Send most every action to the server. Whoa.
        socket.emit(opts.eventName, action)
        return next(action)
      }
    }
  }
}