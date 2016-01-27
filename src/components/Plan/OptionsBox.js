import React, { PropTypes } from 'react'
import Option from './Option'

// Basic suggestion button.
function OptionsBox({ name, type, options }) {
  return (
    <div className={`six columns ${type}-plan`}>
      <div className="inner white">
        <h3 className="m0 p1">{name}</h3>
        <ul className="plan-options list-reset">
          { options && options.map(option =>
            <Option {...option} key={option.id} />
          )}
        </ul>
      </div>
    </div>
  )
}

OptionsBox.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
}
OptionsBox.defaultProps = {
  name: 'Individual Membership',
}
export default OptionsBox
