import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import get from 'lodash/get'

import Header from '../components/Header/Header'
import Router from './Router'
import Footer from '../components/Footer/Footer'

class App extends Component {
  render() {
    const { route } = this.props
    // Decide what component to render based on primarySubject.
    return (
      <div>
        { this.renderErrorMessage() }
        <Header />
        <main>
          <Router {...route} />
        </main>
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  db: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    db: state.db,
    primarySubject: get(state, [ 'filter', 'primarySubject' ]),
  }
}

export default connect(mapStateToProps)(App)
