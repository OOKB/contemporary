import React, { PropTypes } from 'react'

import { connectField } from 'redux-field'
import Wrapper from './Editable/Wrapper'

// We need a magic component that gets all field state info applied to it.
// You could do this for each kind of form field if you want. Or just let it handle
// various field types itself.
const Field = connectField({ formId: 'profile' })(Wrapper)

// Basic suggestion button.
function Profile({ field, fields, profile }) {
  return (
    <div>
      <h2>Profile</h2>
      <div>
        {
          fields.map(id => <Field key={id} field={field[id]} value={profile[id]} id={id} />)
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
  profile: {
    id: 'kai',
    email: 'kai@cape.io',
    name: 'kai curry',
  },
}
export default Profile
