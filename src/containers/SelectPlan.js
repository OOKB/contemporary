import { connect } from 'react-redux'
import Component from '../components/Support/Support'
// Redux connections.

function mapStateToProps(state) {
  const { entity: { support } } = state

  return {
    support,
  }
}
// const mapDispatchToProps = {
// }
export default connect(mapStateToProps)(Component)
