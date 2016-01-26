import React, { PropTypes } from 'react'

import Plans from '../Plan/Plans'
import SectionText from './SectionText'

// Basic suggestion button.
function Membership({ sectionName }) {
  return (
      <article className="pad-top border-top">
        <section id="{ sectionName }">
          <h2>{ sectionName }</h2>
          <div className="group mb4">
            <div className="six columns">
              <SectionText />
            </div>
            <div className="six columns">
              <div className="group">
                {/* print different membership plans here */}
                <Plans />
              </div>
            </div>
          </div>
        </section>
      </article>
  )
}

Membership.propTypes = {
  sectionName: PropTypes.string.isRequired,
}
Membership.defaultProps = {
  sectionName: 'Membership',
}
export default Membership
