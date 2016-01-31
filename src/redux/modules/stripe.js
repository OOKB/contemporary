import immutable from 'seamless-immutable'

export const CLOSE = 'stripe/CLOSE'
export const CLOSED = 'stripe/CLOSED'
export const OPEN = 'stripe/OPEN'
export const OPENED = 'stripe/OPENED'
export const SUBSCRIBE = 'stripe/SUBSCRIBE'

const defaultState = immutable({
  // Config allows a place to store static default stripe config info.
  config: {
    // image: null,
    // key: null,
    locale: 'auto',
    // name: null,
    // panelLabel: null,
  },
  // amount: 0,
  // description: '',
  // email: null,

  opened: false,
  opening: false,
  subscribing: false,
  subscriptionId: null,
})

export default function reducer(state = defaultState, action) {
  const { type, payload } = action
  switch (type) {
    case CLOSE:
      return state.set('opened', false)
    case CLOSED:
      return state.merge({ closed: true, closing: false, opened: false, opening: false })
    case OPEN:
      return state.merge(payload).set('opening', true)
    case OPENED:
      return state.merge({ closed: false, closing: false, opened: true, opening: false })
    case SUBSCRIBE:
      return state.merge(payload).set('subscribing', true)
    default:
      return state
  }
}

export function close() {
  return { type: CLOSE }
}
export function closed() {
  return { type: CLOSED }
}

export function open(config) {
  return {
    type: OPEN,
    payload: config,
  }
}
export function opened() {
  return { type: OPENED }
}

export function submit() {
  return {}
}
export function subscribe(tokenInfo) {
  return {
    type: SUBSCRIBE,
    payload: tokenInfo,
  }
}
