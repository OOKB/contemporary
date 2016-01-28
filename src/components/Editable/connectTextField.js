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
    const { action, field, form, value } = props
    const { handleOpen } = action
    const { editable } = field
    const { open } = form
    return (
      <Editable {...props}>
        { !open &&
          <PreviewText editable={editable} onClick={partial(handleOpen, value)} />
        }
      </Editable>
    )
  }
  Wrapper.propTypes = {
    action: PropTypes.object.isRequired,
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
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
