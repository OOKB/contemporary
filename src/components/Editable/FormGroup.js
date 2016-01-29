import React, { Component, PropTypes } from 'react'

import classNames from 'classnames'

// Editable formGroup.

const defaultStyle = {
  color: 'blue',
  background: 'lightblue',
}
const errorStyle = {
  color: 'red',
  background: 'lightred',
}
const successStyle = {
  color: 'forestgreen',
  background: 'lightgreen',
}
const warningStyle = {
  color: 'yellow',
  background: 'lightyellow',
}

class FormGroup extends Component {
  render() {
    const { label, status, id, required, children, editable, className, style } = this.props
    const cssClasses = {
      editable,
      'form-group': true,
      'has-error': (status === 'error'),
      'has-success': (status === 'success'),
      'has-warning': (status === 'warning'),
      'has-feedback': status,
    }

    return (
      <div className={classNames(cssClasses, className)} style={[ defaultStyle, style ]} id={`${id}-group`}>
        { label &&
          <label className="control-label col-md-3" htmlFor={ id }>
            { label }
            { required ? '*' : false }
          </label>
        }
        {children}
      </div>
    )
  }
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  editable: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  status: PropTypes.string,
  style: PropTypes.object,
}

FormGroup.defaultProps = {
}

export default FormGroup
