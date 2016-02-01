import React, { PropTypes } from 'react'

// Basic suggestion button.
function Subscribing({ amount, description, statusMsg }) {
  const title = `${description}: $${amount / 100}`
  return (
    <div className="subscribing six columns">
      <h3>{ title }</h3>
      <p>{ statusMsg }</p>
    </div>
  )
}

Subscribing.propTypes = {
  amount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}
Subscribing.defaultProps = {
  statusMsg: 'Your payment information has been collected. We are now processing your membership.',
}
export default Subscribing
