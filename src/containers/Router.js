import React, { PropTypes } from 'react'

import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Gritfund from '../components/Gritfund/Gritfund'
import Home from '../components/Home/Home'
import Page from '../components/Page'
import Profile from './Profile'
import Programs from '../components/Programs/Programs'
import Projects from '../components/Projects/Projects'
import Resources from '../components/Resources/Resources'
import Scroll from '../components/Scroll/Scroll'
import Speakers from '../components/Speakers/Speakers'
import Support from '../components/Support/Support'
import Shop from '../components/Shop/Shop'
import Visit from '../components/Visit/Visit'

// Convert a primarySubject to a component!
// Key shall match a primarySubject. @see `valid` {} in /src/routes.js
// Value is the container/component you'd like rendered on match.
const routeIndex = {
  about: About,
  contact: Contact,
  gritfund: Gritfund,
  home: Home,
  page: Page,
  profile: Profile,
  programs: Programs,
  projects: Projects,
  resources: Resources,
  scroll: Scroll,
  shop: Shop,
  speakers: Speakers,
  support: Support,
  visit: Visit,
}

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
