import React, { PropTypes } from 'react'

// Basic suggestion button.
function Option({ message }) {
  return (
    <div classname="input-group">
      <label htmlfor="VARIABLE">VARIABLE</label>
      <input type="radio" name="VARIABLE" id="VARIABLE" defaultvalue="VARIABLE" />
    </div>
  )
}

Option.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}
Option.defaultProps = {
}
export default Option
