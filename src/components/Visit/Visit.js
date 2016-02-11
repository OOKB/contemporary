import React, { PropTypes } from 'react'

import Placeholder from '../Placeholder'

function Visit({ pageName, pageSection }) {
  return (
    <Placeholder>
      <p>Visity Things</p>
    </Placeholder>
  )
}

Visit.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageSection: PropTypes.object.isRequired,
}
Visit.defaultProps = {
  pageName: 'Visit',
}
export default Visit
