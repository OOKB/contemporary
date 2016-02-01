import { compose } from 'redux'
import { connect } from 'react-redux'
import sortBy from 'lodash/sortBy'
import values from 'lodash/values'

import stripe from './stripe'
import Component from '../components/Support/Membership'
// Redux connections.

function mapStateToProps(state) {
  const {
    db: { membership },
    entity: { plan },
  } = state

  function getOptions(id) {
    const vals = values(plan[id])
    if (id === 'team') {
      sortBy(vals, 'amount')
    }
    return vals
  }
  const plans = membership.plans.map(item => ({ ...item, options: getOptions(item.type) }))
  return {
    plans,
    sectionBlurb: membership.sectionBlurb,
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
