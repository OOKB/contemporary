import React, { PropTypes } from 'react'

// Basic suggestion button.
function NotFound({ message }) {
  return (
    <h2 className="not-found">
      { message }
    </h2>
  )
}

NotFound.propTypes = {
  message: PropTypes.string.isRequired,
}
NotFound.defaultProps = {
  message: 'Page not found...',
}
export default NotFound
