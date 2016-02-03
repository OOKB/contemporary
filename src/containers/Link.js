import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateLocation } from '../redux/history'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  const { href, to, hash } = ownProps
  function handleClick(event) {
    event.preventDefault()
    return dispatch(updateLocation({
      pathname: href || to,
      hash,
    }))
  }
  return {
    onClick: handleClick,
  }
}

function Component({ onClick, ...props }) {
  return <a onClick={onClick} {...props} />
}
Component.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
