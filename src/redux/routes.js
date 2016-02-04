import createRouter from 'location-info'

const valid = {
  home: true,
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

const router = createRouter()
router.makeRoute('home', '/')
// For this site basically every page can fall into this arrangement.
router.makeRoute('default', '/(:primarySubject/)(:subject/)(:entityId/)', { validate })

export default function getRoutes(store) {
  return router
}
