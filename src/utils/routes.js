import Pattern from 'url-pattern'
import find from 'lodash/find'
import merge from 'lodash/merge'

const routeIndex = {}
const routes = []

export function makeRoute(id, path) {
  const _path = path || `/${id}/`
  return {
    id,
    pattern: new Pattern(_path),
    page: {
      primarySubject: id,
    },
  }
}

export function addRoute(route) {
  routeIndex[route.id] = route
  routes.push(route.id)
}

export function getRoutes() {
  return routeIndex
}

export function getRoute(id) {
  return routeIndex[id]
}

export function routeInfo(id, path) {
  const route = getRoute(id)
  const params = route.pattern.match(path)
  if (params) {
    return merge({}, route.page, params)
  }
  return params
}

export function pathInfo(path) {
  let info = null
  function isMatch(id) {
    info = routeInfo(id, path)
    return info ? true : false
  }
  const id = find(routes, isMatch)
  return id ? { id, info } : null
}
