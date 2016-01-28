import React, { PropTypes } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import partial from 'lodash/partial'

import { getActions, getState } from '../../redux/modules/editField'

import PreviewText from './PreviewText'
import Editable from './Editable'

export default function connectTextField(formId, fieldId) {
  const actions = getActions(formId, fieldId)
  function Wrapper(props) {
    const { field, value, action } = props
    const { open } = action
    const { editable } = field
    return (
      <Editable {...props}>
        <PreviewText editable={editable} onClick={partial(open, value)} />
      </Editable>
    )
  }
  Wrapper.propTypes = {
    action: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    value: PropTypes.any,
  }
  function mapStateToProps(state) {
    return {
      form: getState(state.form, formId, fieldId),
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      action: bindActionCreators(actions, dispatch),
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(Wrapper)
}
