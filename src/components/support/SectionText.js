import React, { PropTypes } from 'react'

function SectionText({ sectionName, sectionBlurb, memberAlready, featureButtons, individualFeatures, teamFeatures, }) {
  return (
    <div>
      <p>
        { sectionBlurb }
      </p>
      <p>
        { featureButtons && featureButtons.map(({ planType, color }, index) => (
          <button
            key={index}
            className={`mr1 border-button ${planType}-plan ${color}`}
            >
              Learn more about { planType } membership
          </button>
          ))
        }
      </p>
      <div>
        <p>SHOW FEATURES HERE FOR EACH MEMBERSHIP LEVEL WHEN YOU CLICK THE ABOVE BUTTONS</p>
      </div>
      <p dangerouslySetInnerHTML={{ __html: memberAlready }}/>
    </div>
  )
}

SectionText.propTypes = {
  sectionName: PropTypes.string.isRequired,
  sectionBlurb: PropTypes.string.isRequired,
  memberAlready: PropTypes.string.isRequired,
  featureButtons: PropTypes.array.isRequired,
  individualFeatures: PropTypes.array.isRequired,
  teamFeatures: PropTypes.array.isRequired,
  planType: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
SectionText.defaultProps = {
  sectionName: 'SectionText',
  sectionBlurb: "Our members are crucial to the overall health of the museum. In return for their important philanthropic support, we offer a selection of benefits and resources that are designed to help artists continue making their work.",
  memberAlready: 'Already a member? <a href="TK" className="button">Login here</a>',
  featureButtons: [
    {
      'planType': 'individual',
      'planContent': 'individualFeatures',
      'color': 'blue',
    },
    {
      'planType': 'team',
      'planContent': 'teamFeatures',
      'color': 'darkgreen',
    },
  ],
  individualFeatures: [
    {
      "title":"Workspace",
      "blurb":"Individual Members can utilize Workspace, which is our main headquarters. We offer a cowering space equipped with private workstations, group meeting space, a conference room, and library of contemporary art books, magazines, and publications. There is also free Wi-Fi."
    },
    {
      "title":"Studio Visits",
      "blurb":"Individual Members are eligible for studio visits with our visit artists, critics, curators, and colleagues. We invite dozens of distinguished arts professionals to Baltimore every year and give them access to our Member Database to select their desired visits, in efforts to build continued dialogue, networking opportunities, and create discourse between our local constituency and the global arts community."
    },
    {
      "title":"Artist Retreat",
      "blurb":"We will host Our inaugural Artist Retreat in August 2016 and will convene about 60 Baltimore Artists and 30 national arts consultants including critics, curators, gallerists, and collectors for three days of intensive professional development, community building, networking, and leisure. Membership is not required to attend but there is an application fee for all non-members. Selections for the retreat will be made by a panel of museum staff and outside colleagues."
    },
  ],
  teamFeatures: [
    {
      "title":"Workspace",
      "blurb":"Team Members can utilize Workspace, which is our main headquarters, to work individually or host team meetings and events. We offer a coworking space equipped with private workstations, group meeting space, a conference room, and library of contemporary art books, magazines, and publications. There is also free Wi-Fi."
    },
    {
      "title":"Artist Database",
      "blurb":"Team Members can access our Artist Database of Artist Members …"
    },
    {
      "title":"Equipment Library",
      "blurb":"Team Members can borrow museum-grade equipment from our library, including projects, monitors, speakers, and more. Team Members are also entitled to submit requested equipment to our Amazon Wishlist, which we will acquire when possible. Non-members can rent equipment for requested fees and should inquire directly."
    },
  ],
}

export default SectionText
