import React, { PropTypes } from 'react'

// Basic suggestion button.
function Option({ id, name, amount, onClick }) {
  const price = `$${amount / 100}`
  function handleClick() {
    onClick({
      amount,
      description: name,
      subscriptionId: id,
    })
  }
  return (
    <li className="input-group">
      <button onClick={handleClick}>{ name }</button>
      <span className="price">{ price }</span>
    </li>
  )
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
Option.defaultProps = {
  name: 'Individual',
}
export default Option
