import React, { PropTypes } from 'react'

// Basic suggestion button.
function Profile({ field, fields, profile }) {
  return (
    <h2>Form</h2>
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
