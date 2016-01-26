import React, { PropTypes } from 'react'

// Basic suggestion button.
function Plans({ message }) {
  return (
    <div className="six columns">
      <div className="inner bg-blue white clearfix">
        <div className="twelve columns">
          <h2 className="mt1">{ membership level }</h2>

          <OptionsBox />
        </div>
        <div className="text-center">
          <div className="six columns mt1 mb0 p1 bg-orange white">Join</div>
          <div className="six columns mt1 mb0 p1 bg-lightgreen white">Gift</div>
        </div>
      </div>
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
