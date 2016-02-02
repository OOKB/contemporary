import { compose } from 'redux'
import { connect } from 'react-redux'
import find from 'lodash/find'
import partial from 'lodash/partial'
import sortBy from 'lodash/sortBy'
import values from 'lodash/values'

import stripe from './stripe'
import { getFilter, toggle } from '../redux/modules/filter'
import Component from '../components/Support/Membership'
// Redux connections.

function mapStateToProps(state) {
  const {
    db: { membership },
    entity: { plan },
  } = state

  const activeFeature = getFilter(state, [ 'membership', 'feature', 'active' ])

  function getOptions(id) {
    let vals = values(plan[id])
    if (id === 'team') {
      vals = sortBy(vals, 'amount')
    }
    return vals
  }

  const plans = membership.plans.map(({ name, color, type }) => ({
    active: activeFeature === type,
    color,
    name,
    options: getOptions(type),
    type,
  }))

  const activePlan = activeFeature ? find(membership.plans, { type: activeFeature }) : null

  return {
    features: activePlan ? activePlan.features : null,
    plans,
    sectionBlurb: membership.sectionBlurb,
    stripe: {
      panelLabel: 'Join Now',
    },
  }
}

const mapDispatchToProps = {
  setFeature: partial(toggle, 'membership', 'feature'),
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  stripe(),
)(Component)
