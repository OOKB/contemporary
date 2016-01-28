import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getActions, getState } from '../../redux/modules/editField'

export default function connectTextField(formId, fieldId) {
  const actions = getActions(formId, fieldId)
  return Component => {
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
    return connect(mapStateToProps, mapDispatchToProps)(Component)
  }
}
