import React, { PropTypes } from 'react'

// Basic suggestion button.
function SectionText({ sectionName }) {
  return (
    <div>
      <p>Our members are crucial to the overall health of the museum. In return for their important philanthropic support, we offer a selection of benefits and resources that are designed to help artists continue making their work.
      </p>
      <p>
        <a href="#individual" id="indTxt" className="button">Learn more about Individual Membership</a> <a href="#team" id="teamTxt" className="button">Learn more about Team Membership</a>
      </p>
      <div>PRINT OUT INFO RE: each membership features here when you click on ind. or team. above</div>
      <p>
        Already a member? <a href="TK" className="button">Login here</a>
      </p>
      <p>here is some proof this is working</p>
    </div>
  )
}

SectionText.propTypes = {
  sectionName: PropTypes.string.isRequired,
}
SectionText.defaultProps = {
  sectionName: 'SectionText',
}
export default SectionText
