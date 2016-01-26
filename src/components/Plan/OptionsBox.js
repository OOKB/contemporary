import React, { PropTypes } from 'react'
import Option from './Option'

// Basic suggestion button.
function OptionsBox({ name, options }) {
  return (
    <div className="six columns">
      <div className="inner bg-blue white">
        <div className="p1">
          <h3>{name}</h3>
          { options && options.map(option => (
            <Option {...option} key={option.id} />
          ))
          }
        </div>
        <input
          type="submit"
          name="join"
          defaultValue="Join"
          className="twelve bg-orange p1 white"
        />
      </div>
    </div>
  )
}

OptionsBox.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}
OptionsBox.defaultProps = {
  name: 'Individual Membership'
}
export default OptionsBox
