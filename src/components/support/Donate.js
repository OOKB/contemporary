import React, { PropTypes } from 'react'

// Basic suggestion button.
function Donate({ sectionName }) {
  return (
      <article className="pad-top border-top">
        <section id="{ sectionName }">
          <h2>{ sectionName }</h2>
          <div className="group mb4">
            <div className="six columns">
              TK
            </div>
          </div>
        </section>
      </article>
  )
}

Donate.propTypes = {
  sectionName: PropTypes.string.isRequired,
}
Donate.defaultProps = {
  sectionName: 'Donate',
}
export default Donate
