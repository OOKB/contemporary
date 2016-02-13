import React, { PropTypes } from 'react'

import * as routeIndex from './RouteComponents'

function Router(props) {
  const { route: { routeId, params = {} } } = props
  const { primarySubject } = params
  const MainElement = routeIndex[routeId] || routeIndex[primarySubject] || routeIndex.page
  return <MainElement {...props} />
}

Router.propTypes = {
  history: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}
export default Router
