import React, { PropTypes } from 'react'
import radium from 'radium'
// The button that gets clicked for simple editable text fields.

const styles = {
  base: {
    background: 'transparent',
    backgroundColor: 'none',
    backgroundImage: 'none',
    border: 'none',
    textDecoration: 'none',
    borderBottomStyle: 'dashed',
    borderBottomWidth: '1px',
    // borderBottomColor: currentColor,
    borderRadius: 0,
    padding: 0,
    paddingTop: '.5em',
    paddingBottom: '.1em',
  },
}

function PreviewTextEditable({ className, emptyText, title, value, onClick, style }) {
  return (
    <button
      className={ className }
      onClick={ onClick }
      title={ title }
      style={[ styles.base, style ]}
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
  style: PropTypes.object,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
}

export default radium(PreviewTextEditable)
