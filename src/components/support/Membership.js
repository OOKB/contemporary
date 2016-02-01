import React, { PropTypes } from 'react'

import Blurb from './Blurb'
import Plans from '../Plan/Plans'
import SectionText from './SectionText'

// Basic suggestion button.
function Membership({ features, plans, sectionBlurb, setFeature, stripeAction, stripeState }) {
  return (
    <div>
      <Blurb sectionBlurb={sectionBlurb}>
        <SectionText plans={plans} features={features} onClick={setFeature} />
      </Blurb>
      <Plans plans={plans} stripeAction={stripeAction} stripeState={stripeState} />
    </div>
  )
}

Membership.propTypes = {
  plans: PropTypes.array.isRequired,
  sectionBlurb: PropTypes.string.isRequired,
  stripeAction: PropTypes.object.isRequired,
  stripeState: PropTypes.object.isRequired,
}
Membership.defaultProps = {
}
export default Membership
