import React, { PropTypes } from 'react'

// Basic suggestion button.
function Option({ name, amount, id }) {
  const price = `$${amount / 100}`
  return (
    <label>
      <input type="radio" id={ id } value={ id } />
      <span className="name">{ name }</span>
      <span className="price">{ price }</span>
    </label>
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
