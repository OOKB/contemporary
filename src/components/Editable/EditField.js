import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import Input from './input/Input'

import EditableButtons from './Buttons'
import Help from './Help'

// Manage help text.
// Bubble hasError (and value?) up.

class EditField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasErrors: false,
      suggestion: '',
      help: '',
      value: props.defaultValue,
    }
  }

  handleSuggestion(newVal) {
    this.setState({ value: newVal })
  }
  render() {
    const {
      className, errorMessage, help, id,
      onChange, onSubmit, onClose, type, ...other
    } = this.props
    const { suggestion, value, breakPoint, hasErrors } = this.state
    const extraHelp = this.state.help

    let helpTxt = hasErrors ? errorMessage : help
    if (extraHelp) {
      helpTxt += ' ' + extraHelp
    }
    let helpEl = false
    if (helpTxt || suggestion) {
      helpEl = (
        <Help
          help={helpTxt}
          hasErrors={hasErrors}
          id={id}
          suggestion={suggestion}
          onChange={this.handleSuggestion.bind(this)}
        />
      )
    }
    // Decide what component the input is.

    // let warningIcon = false
    // if (hasErrors) {
    //   warningIcon = <Icon symbol="remove" className="form-control-feedback" />
    // }

    return (
      <div className={classNames('editable-form col-md-9', className)}>
        <div className="editable-row">
          <Input
            {...other}
            className="form-control"
            id={id}
            onChange={onChange}
            onClose={onClose}
            value={value}
          />
          <EditableButtons
            disabled={hasErrors}
            onSubmit={() => {onSubmit(value)}}
            onClose={onClose}
          />
        </div>
        {helpEl}
      </div>
    )
  }
}

EditField.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default EditField
