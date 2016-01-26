import { connect } from 'react-redux'
import values from 'lodash/values'
import Component from '../components/Support/Support'
// Redux connections.

function mapStateToProps(state) {
  const { entity: { plan } } = state
  const plans = []
  if (plan.individual) {
    plans.push({
      type: 'individual',
      title: 'Individual Membership',
      plans: values(plan.individual),
    })
  }
  if (plan.team) {
    plans.push({
      type: 'team',
      title: 'Team Membership',
      plans: values(plan.individual),
    })
  }
  return {
    plans,
  }
}
// const mapDispatchToProps = {
// }
export default connect(mapStateToProps)(Component)
