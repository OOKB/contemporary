import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'

import { resetErrorMessage } from '../redux/actions'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Support from '../components/Support/Support'
import Profile from './Profile'
import Page from '../components/Page'

// Convert a primarySubject to a component!
// Key shall match a primarySubject. @see `valid` {} in /src/routes.js
// Value is the container/component you'd like rendered on match.
const routeIndex = {
  page: Page,
  home: Home,
  profile: Profile,
  support: Support,
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
