import React, { PropTypes } from 'react'

// Basic suggestion button.
function Row({ sectionName, sectionBlurb }) {
  return (
      <article className="pad-top border-top">
        <section id="{ sectionName }">
          <h2>{ sectionName }</h2>
          <div className="group mb4">
            <div className="six columns">
              <p>{ sectionBlurb }</p>
            </div>
          </div>
        </section>
      </article>
  )
}

Row.propTypes = {
  sectionName: PropTypes.string.isRequired,
  sectionBlurb: PropTypes.string.isRequired,
}

export default Row
