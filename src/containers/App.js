import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import getRouteInfo from '../redux/routes'

import Header from '../components/Header/Header'
import Router from './Router'
import Footer from '../components/Footer/Footer'

class App extends Component {
  render() {
    const { route } = this.props
    // Decide what component to render based on primarySubject.
    return (
      <div>
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
  route: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    route: getRouteInfo(state),
  }
}

export default connect(mapStateToProps)(App)
