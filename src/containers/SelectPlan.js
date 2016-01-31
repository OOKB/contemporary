import { compose } from 'redux'
import { connect } from 'react-redux'
import sortBy from 'lodash/sortBy'
import values from 'lodash/values'

import stripe from './stripe'
import Component from '../components/Plan/Plans'
// Redux connections.

function mapStateToProps(state) {
  const { entity: { plan } } = state
  const plans = []
  if (plan.individual) {
    plans.push({
      type: 'individual',
      name: 'Individual Membership',
      options: values(plan.individual),
    })
  }
  if (plan.team) {
    plans.push({
      type: 'team',
      name: 'Team Membership',
      options: sortBy(values(plan.team), 'amount'),
    })
  }
  return {
    plans,
    stripe: {
      panelLabel: 'Join Now',
    },
  }
}

// const mapDispatchToProps = {
// }
export default compose(
  connect(mapStateToProps),
  stripe(),
)(Component)
