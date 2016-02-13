import React, { PropTypes } from 'react'

import About from '../components/About/About'
import Home from '../components/Home/Home'
import Visit from '../components/Visit/Visit'
import Programs from '../components/Programs/Programs'
import Projects from '../components/Projects/Projects'
import Speakers from '../components/Speakers/Speakers'
import Scroll from '../components/Scroll/Scroll'
import Resources from '../components/Resources/Resources'
import Gritfund from '../components/Gritfund/Gritfund'
import Support from '../components/Support/Support'
import Profile from './Profile'
import Shop from '../components/Shop/Shop'
import Contact from '../components/Contact/Contact'
import Page from '../components/Page'

// Convert a primarySubject to a component!
// Key shall match a primarySubject. @see `valid` {} in /src/routes.js
// Value is the container/component you'd like rendered on match.
const routeIndex = {
  about: About,
  contact: Contact,
  gritfund: Gritfund,
  home: Home,
  page: Page,
  programs: Programs,
  projects: Projects,
  speakers: Speakers,
  scroll: Scroll,
  profile: Profile,
  resources: Resources,
  shop: Shop,
  support: Support,
  visit: Visit,
}

function Router(props) {
  const { route: { routeId } } = props
  const MainElement = routeIndex[routeId] || routeIndex.notFound
  return <MainElement {...props} />
}

Router.propTypes = {
  history: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}
export default Router
