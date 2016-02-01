import React, { PropTypes } from 'react'

// Basic suggestion button.
function Subscribing({ amount, description, statusMsg }) {
  const title = `${description}: $${amount / 100}`
  return (
    <div className="subscribed">
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
  statusMsg: 'Your membership is now active. Thanks!',
}
export default Subscribing
