import React, { PropTypes } from 'react'
import Option from './Option'

// Basic suggestion button.
function OptionsBox({ name, description, options }) {
  return (
    <div>
      <h3 className="mt1">{name}</h3>
      { description && <div>{description}</div>}
      { options && options.map(option => (
        <Option {...option} />
      ))
      }
      <Submit
        text={submit}
        handleSubmit={handleSubmit}
        invalid={invalid}
        pristine={pristine}
      />
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
