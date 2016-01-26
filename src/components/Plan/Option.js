import React, { PropTypes } from 'react'

// Basic suggestion button.
function Option({ message }) {
  return (
    <h2 className="loading">
      { message }
    </h2>
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
