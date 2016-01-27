import React, { PropTypes, Component } from 'react'
import OptionsBox from './OptionsBox'

class Plans extends Component {
  constructor(props) {
    super(props)

    this.showStripeDialog = this.showStripeDialog.bind(this)
  }
  componentDidMount() {
    this.stripeHandler = window.StripeCheckout.configure(this.getConfig())
  }
  getConfig() {
    return {
      ...this.props.config,
      token: this.props.token,
    }
  }
  stripeHandler: null;
  showStripeDialog(opts) {
    const { panelLabel, name } = this.props.config
    this.stripeHandler.open({
      ...opts,
      name,
      panelLabel,
    })
  }
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
  config: PropTypes.object.isRequired,
  plans: PropTypes.array.isRequired,
  token: PropTypes.func.isRequired,
}
Plans.defaultProps = {
  config: {
    image: 'http://dbox.cape.io/7192159/cape/contemporary/media/contemporary-neon.jpg',
    locale: 'auto',
    key: 'pk_test_tkGympU68Zs5EUNyvdXfu0Tj',
    name: 'Contemporary Museum',
    panelLabel: 'Join Now',
  },
}
export default Plans
