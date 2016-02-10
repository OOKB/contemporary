import createRouter from 'location-info'

const valid = {
  visit: true,
  about: true,
  programs: {
    subject: {
      entityId: true,
    },
  },
  resources: true,
  support: true,
  shop: true,
  contact: true,
}
// Validation for a default route.
function validate({ primarySubject, subject, entityId }) {
  const route = valid[primarySubject]
  if (!route) return false
  if (subject && !route.subject) return false
  if (entityId && !route.subject.entityId) return false
  return true
}

export default function createRoutes() {
  const router = createRouter()
  router.makeRoute('home', '/', { getParams: () => ({ primarySubject: 'home' }) })
  // For this site basically every page can fall into this arrangement.
  router.makeRoute('default', '/(:primarySubject/)(:subject/)(:entityId/)', { validate })
  return router
}
