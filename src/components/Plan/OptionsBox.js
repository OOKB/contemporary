import React, { PropTypes } from 'react'
import Option from './Option'

// Basic suggestion button.
function OptionsBox({ name, type, options, onClick }) {
  return (
    <div className={`six columns ${type}-plan`}>
      <div className="inner bg-blue white">
        <div className="p1">
          <h3>{name}</h3>
          <ul className="plan-options">
            { options && options.map(option =>
              <Option {...option} key={option.id} onClick={onClick} />
            )}
          </ul>
        </div>
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
