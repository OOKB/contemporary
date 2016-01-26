import React, { PropTypes } from 'react'

// Basic suggestion button.
function Option({ name, amount }) {
  const price = `$${amount / 100}`
  return (
    <div className="input-group">
      <label htmlFor="{ name }">{ name }</label>
      <input type="radio" name="{ name }" id="{ name }" defaultvalue="{ price }" />
      <span className="price">{ price }</span>
    </div>
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
