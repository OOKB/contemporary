import React, { PropTypes } from 'react'

import connectTextField from './Editable/connectTextField'
import Wrapper from './Editable/Wrapper'

// Basic suggestion button.
function Profile({ field, fields, profile }) {
  return (
    <div>
      <h2>Form</h2>
      <div>
        {
          fields.map(id => {
            const Field = connectTextField('profile', id)(Wrapper)
            return <Field field={field[id]} value="kai" />
          })
        }
      </div>
    </div>
  )
}

Profile.propTypes = {
  field: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
  profile: PropTypes.object,
}
Profile.defaultProps = {
}
export default Profile
