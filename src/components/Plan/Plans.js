import React, { PropTypes, Component } from 'react'
import OptionsBox from './OptionsBox'
import Subscribing from './Subscribing'

class Plans extends Component {
  render() {
    const { plans, stripeAction, stripeState } = this.props
    const { amount, description, subscribing } = stripeState
    if (subscribing) {
      return <Subscribing amount={amount} description={description} />
    }
    return (
      <div>
        { plans && plans.map(plan =>
          <OptionsBox key={plan.type} {...plan} onClick={stripeAction.open} />
        )}
      </div>
    )
  }
}

Plans.propTypes = {
  plans: PropTypes.array.isRequired,
  stripeAction: PropTypes.object.isRequired,
  stripeConfig: PropTypes.object.isRequired,
  stripeState: PropTypes.object.isRequired,
}
Plans.defaultProps = {
}

export default Plans
