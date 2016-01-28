import React, { PropTypes } from 'react'
import partial from 'lodash/partial'

import Editable from './Editable'
import PreviewText from './PreviewText'
import EditField from './EditField'

function Wrapper(props) {
  const { action, field, form, value } = props
  const { handleOpen } = action
  const { editable, id } = field
  const { open } = form
  return (
    <Editable {...props}>
      { !open &&
        <PreviewText editable={editable} onClick={partial(handleOpen, value)} />
      }
      {
        open &&
        <EditField id={id} />
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
