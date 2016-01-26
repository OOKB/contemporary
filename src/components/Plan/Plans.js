import React, { PropTypes } from 'react'
import OptionsBox from './OptionsBox'

// Basic suggestion button.
function Plans({ plans }) {
  return (
    <div>
      { plans && plans.map(plan => <OptionsBox key={plan.type} {...plan} />) }
    </div>
  )
}

Plans.propTypes = {
  plans: PropTypes.array.isRequired,
}
Plans.defaultProps = {
}
export default Plans
