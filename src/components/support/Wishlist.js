import React, { PropTypes } from 'react'

// Basic suggestion button.
function Wishlist({ sectionName }) {
  return (
      <article className="pad-top border-top">
        <section id="wishlist">
          <h2>{ sectionName }</h2>
          <div className="group mb4">
            <div className="six columns">
              <p>We have organized an Amazon Wishlist that is shared with our Members in efforts to grow our book and equipment libraries. All purchases made here benefit The Contemporary as well as Baltimore’s arts community.
              </p>
            </div>
          </div>
        </section>
      </article>
  )
}

Wishlist.propTypes = {
  sectionName: PropTypes.string.isRequired,
}
Wishlist.defaultProps = {
  sectionName: 'Wishlist',
}
export default Wishlist
