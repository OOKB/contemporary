import React, { PropTypes } from 'react'

import SelectPlan from '../../containers/SelectPlan'

// Basic suggestion button.
function Membership() {
  return (
    <div className="six columns">
      <div className="group">
        <SelectPlan />
      </div>
    </div>
  )
}

Membership.propTypes = {
}
Membership.defaultProps = {
}
export default Membership
