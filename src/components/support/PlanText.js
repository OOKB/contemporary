import React, { PropTypes } from 'react'

function PlanText({ features }) {
  return (
    <div className="bt1 bb1 mt1 pt1 mb1 pb1">
      {
        features.map(({ title, blurb }, index) => (
          <section key={index}>
            <h3 className="mt2 mb1">{title}</h3>
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
