import React, { PropTypes } from 'react'

import Plans from '../Plan/Plans'

// Basic suggestion button.
function Membership({ sectionName }) {
  return (
      <article className="pad-top border-top">
        <section id="membership">
          <h2>{ sectionName }</h2>
          <div className="group mb4">
            <div className="six columns">
              <p id="membershipTxt">Our members are crucial to the overall health of the museum. In return for their important philanthropic support, we offer a selection of benefits and resources that are designed to help artists continue making their work.
              </p>
              <p>
                <a href="#individual" id="indTxt" className="button">Learn more about Individual Membership</a> <a href="#team" id="teamTxt" className="button">Learn more about Team Membership</a>
              </p>
              <div>PRINT OUT INFO RE: each membership features here when you click on ind. or team. above</div>
              <p>
                Already a member? <a href="TK" className="button">Login here</a>
              </p>
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
