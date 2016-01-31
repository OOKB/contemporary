import React, { PropTypes, Component } from 'react'
import OptionsBox from './OptionsBox'

class Plans extends Component {
  render() {
    const { plans } = this.props
    return (
      <div>
        { plans && plans.map(plan =>
          <OptionsBox key={plan.type} {...plan} onClick={this.showStripeDialog} />
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
  token: PropTypes.func.isRequired,
}
Plans.defaultProps = {
}

export default Plans
