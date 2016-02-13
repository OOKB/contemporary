import createRouter from 'location-info'
import { selectActiveKeyDefault } from 'redux-history-sync'

const valid = {
  programs: {
    projects: true,
    speakers: true,
    scroll: true,
    subject: {
      entityId: true,
    },
  },
  resources: {
    gritfund: true,
    subject: {
      entityId: true,
    },
  },
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
router.addRoute('home', '/')
router.addRoutes([
  'about',
  'contact',
  'projects',
  'shop',
  'speakers',
  'support',
  'visit',
])
// For this site basically every section with sub-pages can fall into this arrangement.
router.addRoute('default', '/:primarySubject/(:subject/)(:entityId/)', { validate })

// Pass in the state object and return some info about a "route".
export default function getRouteInfo(state) {
  const history = selectActiveKeyDefault(state)
  // Location object gets sent to locationInfo
  const route = router.locationInfo(history.location)
  return {
    history,
    route,
  }
}
