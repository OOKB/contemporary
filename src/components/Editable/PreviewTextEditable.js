import React, { PropTypes } from 'react'

// The button that gets clicked for simple editable text fields.

function PreviewTextEditable({ className, emptyText, title, value, onClick }) {
  return (
    <button
      className={ className }
      onClick={ onClick }
      title={ title }
    >
      { value || emptyText }
    </button>
  )
}
PreviewTextEditable.defaultProps = {
  className: 'btn btn-secret',
  title: 'Click to edit',
  emptyText: 'Empty',
}
PreviewTextEditable.propTypes = {
  className: PropTypes.string,
  emptyText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
}

export default PreviewTextEditable
