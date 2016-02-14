import React, { PropTypes } from 'react'

import { connectField } from 'redux-field'
import Suggestion from '../Editable/input/SuggestionField'
const Amount = connectField({ formId: 'contribution' })(Suggestion)

function Contribute({ field, options }) {
  return (
    <Amount options={options} field={field.amount} />
  )
}

Contribute.propTypes = {
  field: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
}
Contribute.defaultProps = {
  field: {
    amount: {
      id: 'amount',
      required: true,
      validators: [ 'isRequired', 'isInteger' ],
    },
  },
  options: [
    20, 50, 100, 250, 500,
  ],
}

export default Contribute
