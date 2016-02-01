import React, { PropTypes } from 'react'

function PlanText({ features }) {
  return (
    <div>
      {
        features.map(({ title, blurb }, index) => (
          <section key={index}>
            <h3>{title}</h3>
            <p>{blurb}</p>
          </section>
        ))
      }
    </div>
  )
}

PlanText.propTypes = {
  features: PropTypes.array.isRequired,
}

export default PlanText
