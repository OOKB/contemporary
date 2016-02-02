import Pattern from 'url-pattern'
import { parse } from 'query-string'
import find from 'lodash/find'
import isFunction from 'lodash/isFunction'
import pick from 'lodash/pick'

const routeIndex = {}
const routes = []

export function addRoute(route) {
  routeIndex[route.id] = route
  routes.push(route.id)
}

export function makeRoute(id, path, props = {}) {
  const _path = path || `/${id}/`
  const route = {
    ...props,
    id,
    pattern: new Pattern(_path),
  }
  addRoute(route)
  return route
}

export function getRoutes() {
  return routeIndex
}

export function getRoute(id) {
  return routeIndex[id]
}

// Check path against specific route. If it's a match grab all info about the route.
export function routeInfo(id, path) {
  const route = getRoute(id)
  const params = route.pattern.match(path)
  if (params) {
    if (isFunction(route.validate)) {
      return route.validate(params) ? { ...route, params } : null
    }
    return { ...route, params }
  }
  return params
}

export function pathInfo(path) {
  let route = null
  function isMatch(id) {
    route = routeInfo(id, path)
    return route ? true : false
  }
  const id = find(routes, isMatch)
  return id ? route : null
}

export function locationInfo(location) {
  const { pathname, search } = location
  const info = pick(location, 'protocol', 'hostname', 'port', 'hash')
  info.route = pathInfo(pathname)
  info.query = parse(search)
  return info
}
