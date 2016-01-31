import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import defaults from 'lodash/defaults'
import isFunction from 'lodash/isFunction'
// import omit from 'lodash/omit'
import { close, closed, open, opened, subscribe } from '../redux/modules/stripe'

// @file: Wrap a component with stripe handling. Redux actions control the open/close/submit.
// Lowercase because it needs to be invoked as a function before it eventually returns component.

// options is the default open configuation options.
export default function connectTextField(options = {}) {
  // Pass in a component and it will get connected for you.
  return ComposedComponent => {
    function mapStateToProps(state, ownProps) {
      // Props override options object above.
      const stripeConfig = ownProps.stripe ? defaults({}, ownProps.stripe, options) : options
      // Split stripe defaults and state.
      const { config, ...stripeState } = state.stripe
      return {
        // Props override the configuration options that are in the store.
        stripeConfig: defaults({}, stripeConfig, config),
        stripeState,
      }
    }

    function mapDispatchToProps(dispatch) {
      // Open and close the stripe checkout box with open() and close().
      const actions = { close, closed, open, opened, subscribe }
      return {
        stripeAction: bindActionCreators(actions, dispatch),
      }
    }

    class Stripe extends Component {
      constructor(props) {
        super(props)
        // this.showStripeDialog = this.showStripeDialog.bind(this)
      }
      componentDidMount() {
        this.stripeHandler = window.StripeCheckout.configure(this.getConfig())
        const { stripeState } = this.props
        // Enable to mount a component with the stripe checkout open.
        if (stripeState.opened || stripeState.opening) {
          this.showStripeDialog(this.props)
        }
      }
      // Only open/close Stripe checkout as a reaction to prop changes.
      componentWillUpdate(nextProps) {
        if (!this.props.stripeState.opening && nextProps.stripeState.opening) {
          this.showStripeDialog(nextProps)
        } else if (!this.props.stripeState.closing && nextProps.stripeState.closing) {
          this.stripeHandler.close()
        }
      }
      // Get the configuration options.
      getConfig() {
        const { stripeAction, stripeConfig } = this.props
        const config = {
          ...stripeConfig,
          closed: stripeAction.closed,
          opened: stripeAction.opened,
        }
        return config
      }
      stripeHandler: null;
      showStripeDialog(props) {
        const { stripeAction, stripeConfig, stripeState, onSubmit } = props
        const { panelLabel, name } = stripeConfig
        const { amount, description, subscriptionId } = stripeState
        function token(tokenObj) {
          if (subscriptionId) {
            stripeAction.subscribe({
              ...tokenObj,
              subscriptionId,
            })
          }
          if (isFunction(onSubmit)) {
            onSubmit(token)
          }
        }
        const config = {
          amount,
          description,
          name,
          panelLabel,
          token,
        }
        this.stripeHandler.open(config)
      }
      render() {
        // @TODO remove `closed`, `opened`, `onSubmit` functions.
        return <ComposedComponent {...this.props} />
      }
    }
    Stripe.propTypes = {
      onSubmit: PropTypes.func,
      stripeAction: PropTypes.object.isRequired,
      stripeConfig: PropTypes.object.isRequired,
      stripeState: PropTypes.object.isRequired,
    }

    return connect(mapStateToProps, mapDispatchToProps)(Stripe)
  }
}
