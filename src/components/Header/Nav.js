import React, { Component, PropTypes } from 'react'

import Drawer from './Drawer'

function Nav({ navLinks }) {
  return (
    <nav>
      <ul className="main-menu list-reset clearfix sticky" id="main-menu-wrap">
        { navLinks && navLinks.map(({ mainlink, url }) => (
          <li className="mainlink evenly-spread drop-down">
            <a className="main-link" href={ url }>{ mainlink }</a>
            <Drawer />
          </li>
          ))
        }
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  navLinks: PropTypes.array.isRequired,
  mainlink: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
Nav.defaultProps = {
  navLinks: [
    {
      "mainlink": "Visit",
      "primary": "M-TH, 11am-4pm <br/>by appointment only.",
      "url": "/visit/",
      "sublink": [
        {
          "title": "Studio",
          "secondary": "We are a nomadic, non-collecting museum without a permanent collection or exhibition space. Visitors are always welcome to stop by our working studio and headquarters to learn more about the museum and past projects.",
          "url": "/visit/#studio"
        },
        {
          "title": "Calendar",
          "secondary": "We host regular openings, events, and lectures. Join our mailing list for updates.",
          "url": "https://www.facebook.com/thecontemporarymuseum/events"
        }
      ]
    },
    {
      "mainlink": "About",
      "primary": "The Contemporary is a nomadic, non-collecting art museum in Baltimore, MD.",
      "url": "/about/",
      "sublink": [
        {
          "title": "Mission",
          "secondary": "We are committed to redefining the concept of a museum to be open, inclusive, and available to all. Our work is inspired by three guiding principles: <em>artists matter</em>, <em>collaboration is key</em>, and <em>audience is everywhere</em>.",
          "url": "/about/#mission"
        },
        {
          "title": "History",
          "secondary": "Founded in 1989 as a nomadic institution, we were established in order to foster meaningful exchanges between artists, institutions, and diverse audiences. We’ve been dedicated to ‘redefining the concept of a museum’ ever since.",
          "url": "/about/#history"
        },
        {
          "title": "Staff",
          "secondary": "We are run by a five-person staff including a Director, Program Manager, Business Manager, Advancement Manager, and Outreach Coordinator, as well as three paid interns. Our team works collaboratively to make all operating and curatorial decisions.",
          "url": "/about/#staff"
        },
        {
          "title": "Council",
          "url": "/about/#council",
          "secondary": "Our Curatorial Advisory Council is comprised of six national experts in the arts including curators, critics, educators, and administrators. Each member serves a 1-3 year term and advise us on our various programming initiatives."
        },
        {
          "title": "Board",
          "secondary": "We are bolstered by an eighteen-person Board of Trustees. They oversee every aspect of the organization and come from various disciplines including the arts, humanities, education, medicine, law, public policy, and more.",
          "url": "/about/#board"
        }
      ]
    },
    {
      "mainlink": "Programs",
      "primary": "The Contemporary focuses on three main program areas: Projects, Speaker Series, and <em>Scroll</em>.",
      "url": "/programs/",
      "sublink": [
        {
          "title": "Projects",
          "url": "/programs/projects/",
          "secondary": "We commission site-specific and subject-oriented projects that exist in public space and are in collaboration with artists and existing arts and non-arts institutions, organizations, sites, and spaces. All projects are free and open to the public."
        },
        {
          "title": "Speaker Series",
          "url": "/programs/speaker-series/",
          "secondary": "Our  annual Speaker Series, which is held at the Baltimore School for the Arts, features internationally-recognized artists, critics, and art professionals. Each year the theme shifts to reflect contemporary practices and trends. All lectures are free and open to the public."
        },
        {
          "title": "Scroll",
          "url": "/programs/scroll/",
          "secondary": "Scroll is an annual publication that is produced entirely by our intern staff. Each issue of Scroll explores a different cultural topic related to the mission and efforts of the museum and is available, for free, in print and online."
        }
      ]
    },
    {
      "mainlink": "Resources",
      "url": "/resources/",
      "primary": "The Contemporary offers an array of resources for artists in our area including access to Workspace, Studio Visits, Equipment Library, Art Retreat, and Grit Fund—some resources are only available to our members. <br><br> <a href='#'> Become a Member </a>"
,
      "sublink": [
        {
          "title": "Workspace",
          "url": "/resources/#workspace",
          "secondary": "All Individual and Team Members can utilize Workspace, which is our main headquarters, to work individually or host team meetings and events. We offer a coworking space equipped with private workstations, group meeting space, a conference room, and library of contemporary art books, magazines, and publications. There is also free Wi-Fi."
        },
        {
          "title": "Studio Visits",
          "url": "/resources/#studio-visits",
          "secondary": "All Individual Members are eligible for studio visits with our visiting artists, critics, curators, and colleagues. We invite dozens of distinguished arts professionals to Baltimore every year and give them access to our Member Database to select their desired visits, in efforts to build continued dialogue, networking opportunities, and create discourse between our local constituency and the global arts community."
        },
        {
          "title": "Equipment Library",
          "url": "/resources/#equipment-library",
          "secondary": "Team Members can borrow museum-grade equipment from our library, including projects, monitors, speakers, and more. Team Members are also entitled to submit requested equipment to our Amazon Wishlist, which we will acquire when possible. Non-members can rent equipment for requested fees and should inquire directly."
        },
        {
          "title": "Artist Retreat",
          "url": "/resources/#artist-retreat",
          "secondary": "Our inaugural Artist Retreat will be hosted in August 2016 and will convene about 60 Baltimore artists and 30 national arts consultants including critics, curators, gallerists, and collectors, for three days of intensive professional development, community building, networking, and leisure. Membership is not required but there is an application fee for all non-members. Selections for the retreat will be made by a panel of museum staff and outside colleagues. The Artist Retreat is supported by the..."
        },
        {
          "title": "Grit Fund",
          "url": "/resources/gritfund/",
          "secondary": "The Grit Fund provides 8-12 grants in amounts between $1,000–$6,000, totaling $50,000 annually, to non-incorporated, artist-organized, collaborative initiatives in Baltimore City and County. There is no membership required or application fee to apply."
        }
      ]
    },
    {
      "mainlink": "Support",
      "url": "/support/",
      "primary": "The Contemporary is funded through the generosity of our Board of Trustees, as well as foundations, government agencies, corporations, partner institutions, and individuals."
,
      "sublink": [
        {
          "title": "Donate",
          "url": "/support/#donate",
          "secondary": "We rely on your donation to keep our operation up and running! The impact of your 100% tax-deductible gift is major. Contributions of any size can make a huge difference in helping us bring our projects and educational outreach to life."
        },
        {
          "title": "Membership",
          "url": "/support/#membership",
          "secondary": "Our members are crucial to the overall health of the museum. In return for their important philanthropic support, we offer a selection of benefits and resources that are designed to help artists continue making their work. <br/><br/>Already a member? <a href='TK'>Login here</a>"
        },
        {
          "title": "Wishlist",
          "url": "https://www.amazon.com/gp/registry/wishlist/ref=cm_wl_search_1?ie=UTF8&cid=ACRNUDSXBTBYZ",
          "secondary": "We have organized an Amazon Wishlist that is shared with our Members in efforts to grow our book and equipment libraries. All purchases made here benefit The Contemporary as well as Baltimore’s arts community."
        },
        {
          "title": "Supporters",
          "url": "/support/#donate",
          "secondary": "We love these people and places. Thank you, again and again!"
        }
      ]
    },
    {
      "mainlink": "Shop",
      "url": "/shop/",
      "primary": "Be Patient!"
    },
    {
      "mainlink": "Contact",
      "url": "/contact/",
      "primary": "429 N. Eutaw St, 1S <br/>Baltimore, MD 21201 <br/><br/>o: 443.388.8980 <br/>f: 410.387.7658 <br/>info@contemporary.org",
      "signup": "true"
    }
  ],
}
export default Nav
