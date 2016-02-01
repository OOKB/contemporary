import React, { PropTypes } from 'react'
import template from 'lodash/template'
import classnames from 'classnames'
import PlanText from './PlanText'

function SectionText({ buttonTxt, featureButtons, features, memberAlready }) {
  const buttonTemplate = template(buttonTxt)
  return (
    <div>
      <p>
        { featureButtons &&
          featureButtons.map(({ active, id, color }) => (
            <button
              key={id}
              className={classnames('mr1', 'border-button', color, { active }, `${id}-plan`)}
            >
              { buttonTemplate({ id }) }
            </button>
          ))
        }
      </p>
      { features &&
        <PlanText features={features} />
      }
      { memberAlready &&
        <p>
          { memberAlready.lead }
          <a href={memberAlready.link}>{memberAlready.label}</a>
        </p>
      }
    </div>
  )
}

SectionText.propTypes = {
  displayFeatureId: PropTypes.string,
  memberAlready: PropTypes.object.isRequired,
  features: PropTypes.array.isRequired,
}
SectionText.defaultProps = {
  buttonTxt: 'Learn more about ${id} membership',
  displayFeatureId: null,
  memberAlready: {
    lead: 'Already a member?',
    label: 'Login here',
    link: '/login',
  },
  featureButtons: [
    {
      id: 'individual',
      color: 'blue',

    },
    {
      active: true,
      id: 'team',
      color: 'darkgreen',
    },
  ],
  features: [
    {
      "title": "Workspace",
      "blurb": "Team Members can utilize Workspace, which is our main headquarters, to work individually or host team meetings and events. We offer a coworking space equipped with private workstations, group meeting space, a conference room, and library of contemporary art books, magazines, and publications. There is also free Wi-Fi."
    },
    {
      "title": "Artist Database",
      "blurb": "Team Members can access our Artist Database of Artist Members …"
    },
    {
      "title": "Equipment Library",
      "blurb": "Team Members can borrow museum-grade equipment from our library, including projects, monitors, speakers, and more. Team Members are also entitled to submit requested equipment to our Amazon Wishlist, which we will acquire when possible. Non-members can rent equipment for requested fees and should inquire directly."
    },
  ],
}

// features: [
//   {
//     "title":"Workspace",
//     "blurb":"Individual Members can utilize Workspace, which is our main headquarters. We offer a cowering space equipped with private workstations, group meeting space, a conference room, and library of contemporary art books, magazines, and publications. There is also free Wi-Fi."
//   },
//   {
//     "title":"Studio Visits",
//     "blurb":"Individual Members are eligible for studio visits with our visit artists, critics, curators, and colleagues. We invite dozens of distinguished arts professionals to Baltimore every year and give them access to our Member Database to select their desired visits, in efforts to build continued dialogue, networking opportunities, and create discourse between our local constituency and the global arts community."
//   },
//   {
//     "title":"Artist Retreat",
//     "blurb":"We will host Our inaugural Artist Retreat in August 2016 and will convene about 60 Baltimore Artists and 30 national arts consultants including critics, curators, gallerists, and collectors for three days of intensive professional development, community building, networking, and leisure. Membership is not required to attend but there is an application fee for all non-members. Selections for the retreat will be made by a panel of museum staff and outside colleagues."
//   },
// ],

export default SectionText
