import React, { PropTypes } from 'react'
import partial from 'lodash/partial'

import Editable from './Editable'
import PreviewText from './PreviewText'
import EditField from './EditField'

function Wrapper(props) {
  const { action, field, form, value } = props
  const { handleChange, handleOpen, close } = action
  const { editable, id } = field
  const { errorMessage, open } = form
  return (
    <Editable {...props}>
      { !open &&
        <PreviewText editable={editable} onClick={partial(handleOpen, value)} />
      }
      {
        open &&
        <EditField
          id={id}
          onChange={handleChange}
          onClose={close}
          errorMessage={errorMessage}
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
