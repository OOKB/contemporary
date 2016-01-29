import React, { PropTypes } from 'react'
import partial from 'lodash/partial'

import Editable from './Editable'
import PreviewText from './PreviewText'
import EditField from './EditField'

function Wrapper(props) {
  const { action, field, form, value } = props
  const { onBlur, onChange, onClose, onOpen, onSubmit } = action
  const { editable, id, type } = field
  const { errorMessage, open } = form
  return (
    <Editable {...props}>
      { !open &&
        <PreviewText editable={editable} onClick={partial(onOpen, value)} />
      }
      {
        open &&
        <EditField
          id={id}
          key={id}
          onBlur={onBlur}
          onChange={onChange}
          onClose={onClose}
          onSubmit={onSubmit}
          errorMessage={errorMessage}
          type={type}
          value={form.value}
        />
      }
    </Editable>
  )
}

Wrapper.propTypes = {
  action: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  value: PropTypes.any,
}

export default Wrapper
