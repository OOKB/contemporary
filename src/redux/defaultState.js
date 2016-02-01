export default {
  db: {
    membership: {
      plans: [
        {
          type: 'individual',
          name: 'Individual Membership',
        },
        {
          type: 'team',
          name: 'Team Membership',
        },
      ],
      sectionBlurb: 'Our members are crucial to the overall health of the museum. In return for their important philanthropic support, we offer a selection of benefits and resources that are designed to help artists continue making their work.',
    },
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
