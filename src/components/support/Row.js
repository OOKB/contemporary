import React, { PropTypes } from 'react'

// Basic suggestion button.
function Row({ children, sectionName, sectionBlurb }) {
  return (
      <article className="pad-top border-top">
        <section id={ sectionName }>
          <h2>{ sectionName }</h2>
          <div className="group mb4">
            <div className="six columns">
              <p>{ sectionBlurb }</p>
              { children }
            </div>
          </div>
        </section>
      </article>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  sectionName: PropTypes.string.isRequired,
  sectionBlurb: PropTypes.string.isRequired,
}

export default Row
