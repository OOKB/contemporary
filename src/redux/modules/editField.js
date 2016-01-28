import immutable from 'seamless-immutable'
import get from 'lodash/get'
import isString from 'lodash/isString'

export const BLUR = 'edit/BLUR'
export const CLEAR = 'edit/CLEAR'
export const CLEAR_ERROR = 'edit/CLEAR_ERROR'
export const CLOSE = 'edit/CLOSE'
export const ERROR = 'edit/ERROR'
export const FOCUS = 'edit/FOCUS'
export const META = 'edit/META'
export const OPEN = 'edit/OPEN'
export const SAVE = 'edit/SAVE'
export const SAVED = 'edit/SAVED'
export const SUBMIT = 'edit/SUBMIT'
export const UPDATE = 'edit/UPDATE'
export const TOGGLE_VALIDATING = 'edit/TOGGLE_VALIDATING'

export const types = {
  BLUR, CLEAR, CLEAR_ERROR, CLOSE,
  ERROR, FOCUS, META, OPEN, SAVE,
  SAVED, SUBMIT, UPDATE, TOGGLE_VALIDATING,
}

const defaultFormState = {}
// Only keeping state we can not calculate. See derivedState().
const defaultState = immutable({
  blur: false, // When true the field is open but does not have focus.
  error: null, // String usually. Could be object for more complex error.
  fieldId: null, // String.
  focus: false, // When true the field is open and it has focus.
  initalValue: null, // Anything.
  meta: null, // Object.
  savedValue: null,
  saving: false, // Bool.
  validating: false, // Bool.
  value: null, // Anything.
})

export default function reducer(_state = defaultFormState, action) {
  let prefix = action.meta && action.meta.prefix
  if (isString(prefix)) {
    prefix = prefix.split('.')
  }
  if (!prefix || !action.type || !types[action.type]) return _state
  // Used during rehydration.
  const formState = _state.asMutable ? _state : immutable(_state)
  // Get the state slice we need for this action.
  const state = get(formState, prefix, defaultState)
  let newState = false
  // Ignore all actions that do not have a meta prefix that matches the one passed on creation.
  switch (action.type) {
    case CLEAR:
      newState = defaultState
      break
    case CLEAR_ERROR:
      newState = state.set('error', defaultState.error)
      break
    case CLOSE:
      newState = state.merge({ blur: defaultState.blur, focus: defaultState.focus })
      break
    case ERROR:
      newState = state.merge({
        error: action.payload,
        saving: defaultState.saving,
        validating: defaultState.validating,
      })
      break
    case FOCUS:
      newState = state.set('blur', false)
      break
    case META:
      newState = state.set('meta', action.payload)
      break
    case OPEN:
      newState = state.merge({
        focus: true,
        fieldId: action.payload.initalValue,
        initalValue: action.payload.initalValue,
      })
      break
    case SAVE:
      newState = state.set('saving', true)
      break
    case SUBMIT:
      newState = state.merge({
        blur: defaultState.blur,
        error: defaultState.error,
        focus: defaultState.focus,
        saving: true,
        value: action.payload,
      })
      break
    case SAVED:
      newState = state.merge({
        error: defaultState.error,
        saving: defaultState.saving,
        savedValue: action.payload,
      })
      break
    case TOGGLE_VALIDATING:
      newState = state.set('validating', !state.validating)
      break
    case UPDATE:
      newState = state.merge({
        ...state,
        error: defaultState.error,
        value: action.payload,
      })
      break
    default:
      return formState
  }
  return formState.setIn(prefix, newState)
}

export function derivedState(state, validate) {
  const errorVal = validate ? (validate(state.value) || state.help) : state.error
  const pristine = state.value === state.initalValue
  return {
    ...state,
    editing: state.focus && !pristine,
    dirty: !pristine,
    error: errorVal,
    // The field is open.
    open: state.blur || state.focus,
    pristine,
    saved: pristine || state.value === state.savedValue,
    valid: !!errorVal,
  }
}

export function getActions(prefix) {
  function createAction(type, payload, error) {
    const meta = { prefix }
    return {
      error,
      type,
      payload,
      meta,
    }
  }
  function blur() {
    return createAction(BLUR)
  }
  function focus() {
    return createAction(FOCUS)
  }
  function update(value) {
    return createAction(UPDATE, value)
  }
  function submit(value) {
    return createAction(SUBMIT, value)
  }
  function validating() {
    return createAction(TOGGLE_VALIDATING)
  }
  // Object of actions.
  return {
    blur,
    // Close the field. Reset all values to default.
    clear: () => createAction(CLEAR),
    // Not sure when you would use this.
    clearError: () => createAction(CLEAR_ERROR),
    // The field has been closed.
    close: () => createAction(CLOSE),
    // Async error result. Sync errors should be calculated in container. See derivedState().
    error: (value) => createAction(ERROR, value, true),
    // When a user clicks on a field to edit it.
    focus,
    // Set metadata about the editing process. If you need a place to put extra information.
    meta: (value) => createAction(META, value),
    onBlur: blur,
    onChange: update,
    onFocus: focus,
    onInput: update,
    onSubmit: submit,
    // Almost always the first thing that is called.
    open: (initalValue, fieldId) => createAction(OPEN, { fieldId, initalValue }),
    // Saving to server.
    save: () => createAction(SAVE),
    // Has been saved on server.
    saved: () => createAction(SAVED),
    // Submit, close, save.
    submit,
    toggleValidating: validating,
    // On every change of field value.
    update,
    // Once on async validation. Once on result.
    validating,
  }
}
