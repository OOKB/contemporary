export default {
  db: {
    membership: {
      plans: [
        {
          type: 'individual',
          color: 'blue',
          name: 'Individual Membership',
          features: [
            {
              title: "Workspace",
              blurb: "Individual Members can utilize Workspace, which is our main headquarters. We offer a cowering space equipped with private workstations, group meeting space, a conference room, and library of contemporary art books, magazines, and publications. There is also free Wi-Fi."
            },
            {
              "title": "Studio Visits",
              "blurb": "Individual Members are eligible for studio visits with our visit artists, critics, curators, and colleagues. We invite dozens of distinguished arts professionals to Baltimore every year and give them access to our Member Database to select their desired visits, in efforts to build continued dialogue, networking opportunities, and create discourse between our local constituency and the global arts community."
            },
            {
              "title": "Artist Retreat",
              "blurb": "We will host Our inaugural Artist Retreat in August 2016 and will convene about 60 Baltimore Artists and 30 national arts consultants including critics, curators, gallerists, and collectors for three days of intensive professional development, community building, networking, and leisure. Membership is not required to attend but there is an application fee for all non-members. Selections for the retreat will be made by a panel of museum staff and outside colleagues."
            },
          ],
        },
        {
          type: 'team',
          color: 'darkgreen',
          name: 'Team Membership',
          features: [
            {
              "title": "Workspace",
              "blurb": "Team Members can utilize Workspace, which is our main headquarters, to work individually or host team meetings and events. We offer a coworking space equipped with private workstations, group meeting space, a conference room, and library of contemporary art books, magazines, and publications. There is also free Wi-Fi.",
            },
            {
              "title": "Artist Database",
              "blurb": "Team Members can access our Artist Database of Artist Members …",
            },
            {
              "title": "Equipment Library",
              "blurb": "Team Members can borrow museum-grade equipment from our library, including projects, monitors, speakers, and more. Team Members are also entitled to submit requested equipment to our Amazon Wishlist, which we will acquire when possible. Non-members can rent equipment for requested fees and should inquire directly.",
            },
          ],
        },
      ],
      sectionBlurb: 'Our members are crucial to the overall health of the museum. In return for their important philanthropic support, we offer a selection of benefits and resources that are designed to help artists continue making their work.',
    },
  },
  entity: {
    plan: {},
  },
  stripe: {
    config: {
      image: 'https://dbox.cape.io/7192159/cape/contemporary/media/contemporary-neon-sq.jpg',
      locale: 'auto',
      key: 'pk_test_tkGympU68Zs5EUNyvdXfu0Tj',
      name: 'Contemporary Museum',
    },
  },
}
