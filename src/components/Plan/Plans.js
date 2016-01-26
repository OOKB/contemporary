import React, { PropTypes } from 'react'
import OptionsBox from './OptionsBox'

// Basic suggestion button.
function Plans({ message, membershipLevel }) {
  return (
    <div>
      {/* so, to print more than one box, this needs to be some sort of map? */}
      <OptionsBox />
    </div>
  )
}

Plans.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
}
Plans.defaultProps = {
}
export default Plans
