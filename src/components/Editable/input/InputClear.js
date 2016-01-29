import Radium from 'radium'
import React, { Component, PropTypes } from 'react'
import defaultsDeep from 'lodash/defaultsDeep'
// import Icon from '../Icon'
// <Icon symbol="remove" />
// Simple wrapper around an input field.
// 1. Checks for changes every 300ms. Useful for safari autocomplete.
// 2. Also has a clear button that changes input value to empty string.

function getStyles(style) {
  const defaultStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    border: 'none',
    background: 'transparent',
    width: '1rem',
  }
  return defaultsDeep({}, style, defaultStyle)
}

@Radium
class InputClear extends Component {
  render() {
    const { style, ...props } = this.props
    return (
      <button {...props} type="button" style={getStyles(style)}>
        x
      </button>
    )
  }
}

InputClear.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
}
InputClear.defaultProps = {
  style: {
    color: 'black',
    ':hover': {
      color: 'red',
    },
  },
  title: 'Clear input value',
}
export default InputClear
