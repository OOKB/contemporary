import React, { Component, PropTypes } from 'react'

import FormGroup from './FormGroup'

const typeDefaults = {
  email: {
    errorMessage: 'Invalid email. Please check and try again.',
    help: 'Your email address please.',
    id: 'email',
    label: 'Email',
    placeholder: 'you@domain.com',
  },
  fullName: {
    id: 'name',
    label: 'Full Name',
    errorMessage: 'Please use your full name.',
    validators: [ 'isFullName' ],
  },
  dateTime: {
    label: 'Date & Time',
  },
}

// This is for an individual, edtiable field.
class EditableField extends Component {
  constructor(props) {
    super(props)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault()
    // this.props.action.submit()
  }
  render() {
    const { children, field, form } = this.props
    const { editable, label, id, required } = field
    const { saving, status } = form

    return (
      <div className="editable-form form-horizontal" onSubmit={this.handleSubmit}>
        <FormGroup
          id={id}
          label={label}
          editable={editable}
          required={required}
          status={status}
        >
          { children }
          { saving && <span>Saving...</span>}
        </FormGroup>
      </div>
    )
  }
}

EditableField.propTypes = {
  action: PropTypes.shape({
    submit: PropTypes.func.isRequired,
  }).isRequired,
  // When not editing the children is what will show up inside the form group.
  children: PropTypes.node,
  // Information about the form field. Should not change.
  field: PropTypes.shape({
    editable: PropTypes.bool.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    type: PropTypes.oneOf([
      'email',
      'dateTime',
      'fullName',
      'text',
    ]).isRequired,
    validators: PropTypes.array,
  }),
  // All the state related to editing the form field.
  form: PropTypes.shape({
    editing: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    status: PropTypes.string,
  }),
  // Prefix used to specify form state slice.
  prefix: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

EditableField.defaultProps = {
}

export default EditableField
