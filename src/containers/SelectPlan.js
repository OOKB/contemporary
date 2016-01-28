import { connect } from 'react-redux'
import sortBy from 'lodash/sortBy'
import values from 'lodash/values'
import Component from '../components/Support/Support'
// Redux connections.

function mapStateToProps(state) {
  const { entity: { plan } } = state
  const plans = []
  if (plan.individual) {
    plans.push({
      type: 'individual',
      name: 'Individual Membership',
      options: sortBy(values(plan.individual), 'amount'),
    })
  }
  if (plan.team) {
    plans.push({
      type: 'team',
      name: 'Team Membership',
      options: sortBy(values(plan.team), 'amount'),
    })
  }
  console.log(plans)
  return {
    plans,
  }
}
// const mapDispatchToProps = {
// }
export default connect(mapStateToProps)(Component)
