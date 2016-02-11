import React, { PropTypes } from 'react'

import Placeholder from '../Placeholder'

function Visit({ pageName, pageBlurb }) {
  return (
    <Placeholder>
      <h3>{pageName}</h3>
      <p className="lead">{pageBlurb}</p>
    </Placeholder>
  )
}

Visit.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageBlurb: PropTypes.string.isRequired,
}
Visit.defaultProps = {
  pageName: 'Visit The Contemporary',
  pageBlurb: 'We are a nomadic, non-collecting museum without a permanent collection or exhibition space. Visitors are always welcome to stop by our working studio and headquarters to learn more about the museum and past projects.'
}
export default Visit
