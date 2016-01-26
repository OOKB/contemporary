import { connect } from 'react-redux'
import Component from '../components/Plan/Plans'
// Redux connections.

function mapStateToProps(state) {
  const { entity: { plan } } = state

  return {
    plan,
  }
}
// const mapDispatchToProps = {
// }
export default connect(mapStateToProps)(Component)
