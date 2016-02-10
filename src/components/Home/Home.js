import React, { PropTypes } from 'react'

import Page from '../Page'
import HomepageBlocks from './HomepageBlocks'

function Home({ pageName, blocks, pageClass }) {
  return (
    <Page pageName={pageName} pageClass={pageClass}>
      <HomepageBlocks blocks={blocks}/>
    </Page>
  )
}

Home.propTypes = {
  pageClass: PropTypes.string,
  pageName: PropTypes.string.isRequired,
  sectionName: PropTypes.string,
  url: PropTypes.string,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  blocks: PropTypes.array,
}
Home.defaultProps = {
  pageClass: 'home',
  pageName: 'The Contemporary',
  slideshow: [
    {
      "sectionName": "GhostFood",
      "url": "/programs/projects/ghostfood/",
      "image": "/img/ghostfood.jpg",
    },
    {
      "quote": "You don’t necessarily change things by having a big impact. Sometimes things change because a lot of small things happen.",
      "byline": "Coco Fusco, Artist",
      "extra": "CoHosts: Guest Spot",
      "url": "https://vimeo.com/84395255",
      "bgColor": "darkblue",
    },
    {
      "sectionName": "Speaker Series",
      "url": "/programs/speaker-series/",
      "image": "/img/tile_1.jpg",
    },
    {
      "sectionName": "Scroll",
      "url": "/programs/scroll/",
      "image": "/img/tile_2.jpg",
    },
  ],
  blocks: {
    artistretreat: {
      "sectionName": "Artist Retreat",
      "url": "/resources/#artist-retreat",
      "bgColor": "lightgreen",
    },
    gritfund: {
      "sectionName": "Grit Fund",
      "url": "/gritfund/",
      "bgImage": "http://contemporary.ookb.co/img/gritfund2.jpg",
      "bgColor": "red",
      "big": true,
    },
    membership: {
      "sectionName": "Membership",
      "url": "/support/#membership",
      "bgColor": "orange",
    },
    mailinglist: {
      "sectionName": "Mailing List",
      "url": "http://contemporary.us7.list-manage1.com/subscribe?u=eff2e5ec224690abbfe4e9f4d&id=9909b16eee",
      "bgColor": "red",
    },
    donate: {
      "sectionName": "Donate!",
      "url": "/support/#donate",
      "bgColor": "darkgreen",
    },
    contact: {
      "sectionName": "Contact",
      "url": "/contact/",
      "bgColor": "blue",
    },
  },
}
export default Home
