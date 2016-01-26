import { connect } from 'react-redux'
import Component from '../components/Support/Membership'
// Redux connections.

function mapStateToProps(state) {
  const { entity: { membership } } = state

  return {
    membership,
  }
}
// const mapDispatchToProps = {
// }
export default connect(mapStateToProps)(Component)
