import { connect } from 'react-redux'

import Component from '../components/Profile'

function mapStateToProps(state) {
  const id = {
    id: 'id',
    editable: false,
    label: 'ID',
  }
  const email = {
    id: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    validators: [ 'isRequired', 'isEmail' ],
  }
  const name = {
    id: 'name',
    type: 'text',
    label: 'Name',
    required: true,
    validators: [ 'isRequired' ],
  }
  const field = {
    email,
    id,
    name,
  }
  return {
    entity: state.entity && state.entity.profile,
    field,
    fields: [ 'id', 'email', 'name' ],
    // form: state.form.profile,
    prefix: 'profile',
    profile: state.profile,
  }
}
// const mapDispatchToProps = {
// }
export default connect(mapStateToProps)(Component)
