import React, { PropTypes } from 'react'

// Basic suggestion button.
function Option({ name, price }) {
  return (
    <div classname="input-group">
      <label htmlfor="{ name }">{ name }</label>
      <input type="radio" name="{ name }" id="{ name }" defaultvalue="{ price }" />
      <span className="price">$ { price }</span>
    </div>
  )
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}
Option.defaultProps = {
  name: 'Individual',
  price: 50,
}
export default Option
