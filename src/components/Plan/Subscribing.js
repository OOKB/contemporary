import React, { PropTypes } from 'react'

// Basic suggestion button.
function Subscribing({ amount, description, statusMsg }) {
  const title = `${description}: $${amount / 100}`
  return (
    <div className="subscribing three columns bg-orange">
      <div className="inner white pt1">
        <h3>{ title }</h3>
        <p>{ statusMsg }</p>
      </div>
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
