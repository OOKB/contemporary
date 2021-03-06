import React, { PropTypes } from 'react'

function Row({ children, sectionName }) {
  return (
      <article className="pad-top border-top">
        <section id={ sectionName }>
          <h2>{ sectionName }.</h2>
          <div className="group mb4">
            { children }
          </div>
        </section>
      </article>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  sectionName: PropTypes.string.isRequired,
}

export default Row
