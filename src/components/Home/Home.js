import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'

function Home({ pageName }) {
  return (
    <Page pageName={pageName}>
      <Row />
    </Page>
  )
}

Home.propTypes = {
  pageName: PropTypes.string.isRequired,
}
Home.defaultProps = {
  pageName: 'The Contemporary (homepage test)',
}
export default Home
