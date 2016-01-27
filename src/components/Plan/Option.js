import React, { PropTypes } from 'react'

// Basic suggestion button.
function Option({ name, amount }) {
  const price = `$${amount / 100}`
  return (
    <li className="input-group">
      <button>{ name }</button>
      <span className="price">{ price }</span>
    </li>
  )
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}
Option.defaultProps = {
  name: 'Individual',
}
export default Option
