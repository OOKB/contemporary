import React, { PropTypes } from 'react'
import Option from './Option'

// Basic suggestion button.
function OptionsBox({ name, type, options, onClick }) {
  return (
    <div className={`six columns ${type}-plan`}>
      <div className="inner white">
        <h3 className="p1">{name}</h3>
        <ul className="plan-options list-reset">
          { options && options.map(option =>
            <Option {...option} key={option.id} onClick={onClick} />
          )}
        </ul>
      </div>
    </div>
  )
}

OptionsBox.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
}
OptionsBox.defaultProps = {
  name: 'Individual Membership',
}
export default OptionsBox
