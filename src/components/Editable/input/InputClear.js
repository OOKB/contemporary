import radium from 'radium'
import React, { Component, PropTypes } from 'react'
import Icon from '../Icon'

const styles = {
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    border: 'none',
    background: 'transparent',
    width: '1rem',
  },
}

class InputClear extends Component {
  render() {
    const { style, ...props } = this.props
    return (
      <button {...props} type="button" style={[ styles.base, style ]}>
        <Icon symbol="times" />
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
export default radium(InputClear)
