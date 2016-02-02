import { makeRoute } from './utils/routes'

const valid = {
  primarySubject: {
    visit: true,
    about: true,
    programs: true,
    resources: true,
    support: true,
    shop: true,
    contact: true,
  },
}
// Validation for a default route.
function validate({ primarySubject }) {
  return valid.primarySubject[primarySubject] || false
}

// For this site basically every page can fall into this arrangement.
makeRoute('default', '/(:primarySubject/)(:subject/)(:entityId/)', { validate })
