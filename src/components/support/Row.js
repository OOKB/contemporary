import React, { PropTypes } from 'react'

// Basic suggestion button.
function Row({ children, sectionName }) {
  return (
      <article className="pad-top border-top">
        <section id={ sectionName }>
          <h2>{ sectionName }</h2>
          { children }
        </section>
      </article>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  sectionName: PropTypes.string.isRequired,
}

export default Row
