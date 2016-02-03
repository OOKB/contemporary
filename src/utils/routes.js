import Pattern from 'url-pattern'
import { parse } from 'query-string'
// import clone from 'lodash/clone'
import find from 'lodash/find'
import isFunction from 'lodash/isFunction'
import pick from 'lodash/pick'

export default function createRouter() {
  // Route database.
  const routeIndex = {}
  // Array of route ids.
  const routes = []
  // Adds route to index and array.
  function setRoute(route) {
    routeIndex[route.id] = route
    routes.push(route.id)
  }
  // Get all routes. Returns index and array.
  function getRoutes() {
    return {
      route: routeIndex,
      routes,
    }
  }
  // Get a route by id.
  function getRoute(id) {
    return routeIndex[id]
  }

  // @TODO add a way to remove route?

  // Helper function to make and set new routes.
  // @id is a machine readable string for the route.
  // @path is a path string. See url-pattern module for possible options.
  // @props object that might include validate function.
  function makeRoute(id, path, props = {}) {
    // path is not required. Default to use the id.
    const _path = path || `/${id}/`
    // Make our object that represents a route.
    const route = {
      // Apply any of the props.
      ...props,
      id,
      // Create new UrlPattern object.
      pattern: new Pattern(_path),
    }
    // Add it to our route database index and id list.
    setRoute(route)
    // Return what we created.
    return route
  }

  // Check path against specific route. If it's a match grab all info about the route.
  function routeInfo(id, path) {
    // Get the route.
    const route = getRoute(id)
    // Run the match method.
    let params = route.pattern.match(path)
    // No match, return.
    if (!params) return null
    // Check validate function.
    if (isFunction(route.validate) && !route.validate(params)) {
      return null
    }
    // There is a valid match against this route.
    if (isFunction(route.getParams)) {
      params = route.getParams(params, path, route)
    }
    // Clone the route props and add params and path to it.
    const info = {
      ...route,
      params,
      path,
    }
    return info
  }

  // Check a path against all routes.
  function pathInfo(path) {
    // Default to no route.
    let route = null
    // Run against each id in routes array.
    function isMatch(id) {
      // Run match against the route.
      // If it's valid it returns route information.
      route = routeInfo(id, path)
      // Tell find() if we found a result or not.
      return route ? true : false
    }
    // The id of the matched route.
    const id = find(routes, isMatch)
    // If we found an id return the route object. Otherwise null.
    return id ? route : null
  }

  // Makes a new object based on browser document.location object.
  function locationInfo(location) {
    // Grab props that we will process.
    const { pathname, search } = location
    // Grab the properties we pass along from the location object.
    const info = pick(location, 'protocol', 'hostname', 'port', 'hash')
    // Parse pathname based on routes above.
    info.route = pathInfo(pathname)
    // Parse query string.
    info.query = search ? parse(search) : null
    if (info.route && isFunction(info.route.getState)) {
      info.state = info.route.getState(info)
    }
    return info
  }
  return {
    getRoutes,
    getRoute,
    locationInfo,
    makeRoute,
    pathInfo,
  }
}
