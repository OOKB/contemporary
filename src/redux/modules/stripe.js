import immutable from 'seamless-immutable'

export const CLOSE = 'stripe/CLOSE'
export const CLOSED = 'stripe/CLOSED'
export const OPEN = 'stripe/OPEN'
export const OPENED = 'stripe/OPENED'
export const SUBSCRIBE = 'stripe/SUBSCRIBE'
export const SUBSCRIBED = 'stribe/SUBSCRIBED'

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
  subscribed: false,
  subscribing: false,
  subscriptionId: null,
  tokenInfo: {},
})

export default function reducer(_state = defaultState, action) {
  const { type, payload } = action
  if (!type) return _state
  const state = _state.asMutable ? _state : immutable(_state)
  switch (type) {
    case CLOSE:
      return state.set('opened', false)
    case CLOSED:
      return state.merge({ closed: true, closing: false, opened: false, opening: false })
      // .without('amount', 'description', 'subscriptionId')
    case OPEN:
      return state.merge(payload).set('opening', true)
    case OPENED:
      return state.merge({ closed: false, closing: false, opened: true, opening: false })
    case SUBSCRIBE:
      return state.merge({ subscribing: true, tokenInfo: payload })
    case SUBSCRIBED:
      return state.merge({ subscribing: false, subscribed: true, tokenInfo: {} })
    default:
      if (action.response && action.response.stripe) {
        return state.merge(action.response.stripe)
      }
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
export function subscribed() {
  return {
    type: SUBSCRIBED,
  }
}
