import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'

import { resetErrorMessage } from '../redux/actions'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Visit from '../components/Visit/Visit'
import About from '../components/About/About'
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
  page: Page,
  home: Home,
  visit: Visit,
  about: About,
  programs: Programs,
  projects: Projects,
  speakers: Speakers,
  scroll: Scroll,
  resources: Resources,
  gritfund: Gritfund,
  profile: Profile,
  support: Support,
  shop: Shop,
  contact: Contact,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  handleDismissClick(err) {
    this.props.resetErrorMessage()
    err.preventDefault()
  }

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#" onClick={this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    )
  }

  render() {
    const { children, primarySubject } = this.props
    // Decide what component to render based on primarySubject.
    const MainElement = routeIndex[primarySubject] || Page
    return (
      <div>
        { this.renderErrorMessage() }
        <Header />
        <main>
          <MainElement />
          { children }
        </main>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  children: PropTypes.node,
  db: PropTypes.object.isRequired,
  primarySubject: PropTypes.string.isRequired,
}

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    db: state.db,
    primarySubject: get(state, [ 'filter', 'primarySubject' ]),
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
})(App)
