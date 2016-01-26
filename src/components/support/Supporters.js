import React, { PropTypes } from 'react'

// Basic suggestion button.
function Supporters({ sectionName }) {
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

Supporters.propTypes = {
  sectionName: PropTypes.string.isRequired,
}
Supporters.defaultProps = {
  sectionName: 'Supporters',
}
export default Supporters
