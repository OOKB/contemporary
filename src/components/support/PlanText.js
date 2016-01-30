import React, { PropTypes } from 'react'

function PlanText({ individualFeatures, teamFeatures, value, onClick }) {
  return (
    <div>
      { individualFeatures && individualFeatures.map(({ title, blurb }, index) => (
        <section>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: blurb }}/>
        </section>
        ))
      }
      { teamFeatures && teamFeatures.map(({ title, blurb }, index) => (
        <section>
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={{ __html: blurb }}/>
        </section>
        ))
      }    </div>
  )
}

PlanText.propTypes = {
  individualFeatures: PropTypes.array.isRequired,
  teamFeatures: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default PlanText
