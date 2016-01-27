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

// Only keeping state we can not calculate. See derivedState().
const defaultState = {
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
}

export default function getReducer(prefix) {
  return (state = defaultState, action) => {
    // Ignore all actions that do not have a meta prefix that matches the one passed on creation.
    if (action.meta && action.meta !== prefix) return state
    switch (action.type) {
      case CLEAR:
        return defaultState
      case CLEAR_ERROR:
        return { ...state, error: defaultState.error }
      case CLOSE:
        return { ...state, blur: defaultState.blur, focus: defaultState.focus }
      case ERROR:
        return {
          ...state,
          error: action.payload,
          saving: defaultState.saving,
          validating: defaultState.validating,
        }
      case FOCUS:
        return {
          ...state,
          blur: false,
        }
      case META:
        return { ...state, meta: action.payload }
      case OPEN:
        return {
          ...state,
          focus: true,
          fieldId: action.payload.initalValue,
          initalValue: action.payload.initalValue,
        }
      case SAVE:
        return { ...state, saving: true }
      case SUBMIT:
        return {
          ...state,
          blur: defaultState.blur,
          error: defaultState.error,
          focus: defaultState.focus,
          saving: true,
          value: action.payload,
        }
      case SAVED:
        return {
          ...state,
          error: defaultState.error,
          saving: defaultState.saving,
          savedValue: action.payload,
        }
      case TOGGLE_VALIDATING:
        return { ...state, validating: !state.validating }
      case UPDATE:
        return {
          ...state,
          error: defaultState.error,
          value: action.payload,
        }
      default:
        return state
    }
  }
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
    open: (fieldId, initalValue) => createAction(OPEN, { fieldId, initalValue }),
    // Saving to server.
    save: () => createAction(SAVE),
    // Has been saved on server.
    saved: () => createAction(SAVED),
    submit,
    toggleValidating: validating,
    // On every change of field value.
    update,
    // Once on async validation. Once on result.
    validating,
  }
}
