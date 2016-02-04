import React, { PropTypes } from 'react'

import Page from '../Page'
import Row from '../Row'
import HomepageBlocks from './HomepageBlocks'

function Home({ pageName }) {
  return (
    <Page pageName={pageName}>
      <HomepageBlocks />
    </Page>
  )
}

Home.propTypes = {
  pageName: PropTypes.string.isRequired,
}
Home.defaultProps = {
  pageName: 'The Contemporary (homepage test)',
  slideshow: [
    {
      "title": "GhostFood",
      "url": "/programs/projects/ghostfood/",
      "image": "/img/ghostfood.jpg",
    },
    {
      "quote": "You don’t necessarily change things by having a big impact. Sometimes things change because a lot of small things happen.",
      "byline": "Coco Fusco, Artist",
      "extra": "CoHosts: Guest Spot",
      "url": "https://vimeo.com/84395255",
      "bg-color": "darkblue",
    },
    {
      "title": "Speaker Series",
      "blurb": "Our annual Speaker Series, which is held at the Baltimore School for the Arts, features internationally-recognized artists, critics, and art professionals. Each year the theme shifts to reflect contemporary practices and trends. All lectures are free and open to the public.",
      "url": "/programs/speaker-series/",
      "image": "/img/tile_1.jpg",
    },
    {
      "title": "Scroll",
      "blurb": "<em>Scroll</em> is an annual publication that is produced entirely by our intern staff. Each issue of Scroll explores a different cultural topic related to the mission and efforts of the museum and is available, for free, in print and online.",
      "url": "/programs/scroll/",
      "image": "/img/tile_2.jpg",
    },
  ],
  blocks: [
    {
      "title": "Grit Fund",
      "blurb": "The Grit Fund supports unincorporated and collaborative artist-organized activity that contributes significantly to Baltimore’s arts landscape but seldom qualifies for traditional funding.",
      "url": "#page1",
      "image": "/img/gritfund2.jpg",
      "bg-color": "red",
      "big": true,
    },
    {
      "title": "Membership",
      "blurb": "Our members are crucial to the overall health of the museum. …",
      "url": "/support/#membership",
      "bg-color": "orange",
    },
    {
      "title": "Mailing List",
      "url": "http://contemporary.us7.list-manage1.com/subscribe?u=eff2e5ec224690abbfe4e9f4d&id=9909b16eee",
      "bg-color": "red",
    },
    {
      "title": "Donate!",
      "blurb": "We rely on your donation to keep our operation up and running! …",
      "url": "/support/#donate",
      "bg-color": "darkgreen",
    },
    {
      "title": "Contact",
      "url": "/contact/",
      "bg-color": "blue",
    },
  ],
}
export default Home
