import React, { PropTypes } from 'react'
import template from 'lodash/template'
import classnames from 'classnames'
import PlanText from './PlanText'

function SectionText({ buttonTxt, plans, features, memberAlready, onClick }) {
  const buttonTemplate = template(buttonTxt)
  return (
    <div>
      <p>
        { plans &&
          plans.map(({ active, type, color }) => {
            function handleClick() {
              onClick(type)
            }
            return (
              <button
                key={type}
                className={classnames('mr1', 'border-button', color, { active }, `${type}-plan`)}
                onClick={handleClick}
              >
                { buttonTemplate({ type }) }
              </button>
            )
          })
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
  features: PropTypes.array,
  onClick: PropTypes.func.isRequired,
}
SectionText.defaultProps = {
  buttonTxt: 'Learn more about ${type} membership',
  displayFeatureId: null,
  memberAlready: {
    lead: 'Already a member?',
    label: 'Login here',
    link: '/login',
  },
}

export default SectionText
