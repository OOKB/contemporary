import React, { PropTypes } from 'react'
import Option from './Option'

// Basic suggestion button.
function OptionsBox({ name, description, options }) {
  return (
    <div className="six columns">
      <h3 className="mt1">A Name {name}</h3>
      { description && <div>{description}</div>}
      { options && options.map(option => (
        <Option {...option} />
      ))
      }
      <input type="submit" name="join" defaultValue="Join" />
    </div>
  )
}

OptionsBox.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}
OptionsBox.defaultProps = {
}
export default OptionsBox
