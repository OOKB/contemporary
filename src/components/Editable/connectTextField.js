import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getActions, getState } from '../../redux/modules/editField'

// This gets state and actions for a specific field. That is all.
// The formId and fieldId can be sent via init as an object or with props on each instance.
export default function connectTextField(options = {}) {
  function getInfo(ownProps) {
    return {
      formId: ownProps.formId || options.formId || 'default',
      fieldId: ownProps.id || ownProps.fieldId || options.fieldId || 'NO_FIELD_ID',
    }
  }
  // Pass in a component and it will get connected for you.
  return Component => {
    function mapStateToProps(state, ownProps) {
      const { formId, fieldId } = getInfo(ownProps)
      return {
        form: getState(state.form, formId, fieldId),
      }
    }
    function mapDispatchToProps(dispatch, ownProps) {
      const { formId, fieldId } = getInfo(ownProps)
      return {
        action: bindActionCreators(getActions(formId, fieldId), dispatch),
      }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Component)
  }
}
