import React, { PropTypes, Component } from 'react'
import OptionsBox from './OptionsBox'
import Subscribing from './Subscribing'
import Subscribed from './Subscribed'

class Plans extends Component {
  render() {
    const { plans, stripeAction, stripeState } = this.props
    const { amount, description, subscribing, subscribed } = stripeState
    if (subscribing) {
      return <Subscribing amount={amount} description={description} />
    }
    if (subscribed) {
      return <Subscribed amount={amount} description={description} />
    }
    return (
      <div className="six columns">
        <div className="group">
          { plans && plans.map(plan =>
            <OptionsBox key={plan.type} {...plan} onClick={stripeAction.open} />
          )}
        </div>
      </div>
    )
  }
}

Plans.propTypes = {
  plans: PropTypes.array.isRequired,
  stripeAction: PropTypes.object.isRequired,
  stripeState: PropTypes.object.isRequired,
}
Plans.defaultProps = {
}

export default Plans
