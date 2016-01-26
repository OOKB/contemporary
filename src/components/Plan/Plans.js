import React, { PropTypes } from 'react'

// Basic suggestion button.
function Plans({ message }) {
  return (
    <h2 className="loading">
      { message }
    </h2>
  )
}

Plans.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}
Plans.defaultProps = {
}
export default Plans
