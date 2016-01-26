import React, { PropTypes } from 'react'
import OptionsBox from './OptionsBox'

// Basic suggestion button.
function Plans({ }) {
  return (
    <div>
      {/* so, to print more than one box, this needs to be some sort of map? */}
      <OptionsBox />
    </div>
  )
}

Plans.propTypes = {
}
Plans.defaultProps = {
}
export default Plans
