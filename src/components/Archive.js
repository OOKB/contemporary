import React, { PropTypes } from 'react'

function Archive({ children, src }) {
  return (
    <div className="archive">
      <p className="lead twelve columns">It would be good to have some sort of filtering tools</p>
      <div className="three columns image">
        <p>Year/Date</p>
        <img src={ src } />
        <h3>Title</h3>
        <p>Site(s)</p>
        <p>Artist(s)</p>
      </div>
      <div className="three columns image">
        <p>Year/Date</p>
        <img src={ src } />
        <h3>Title</h3>
        <p>Site(s)</p>
        <p>Artist(s)</p>
      </div>
      <div className="three columns image">
        <p>Year/Date</p>
        <img src={ src } />
        <h3>Title</h3>
        <p>Site(s)</p>
        <p>Artist(s)</p>
      </div>
      <div className="three columns image">
        <p>Year/Date</p>
        <img src={ src } />
        <h3>Title</h3>
        <p>Site(s)</p>
        <p>Artist(s)</p>
      </div>
      <div className="three columns image">
        <p>Year/Date</p>
        <img src={ src } />
        <h3>Title</h3>
        <p>Site(s)</p>
        <p>Artist(s)</p>
      </div>
      <div className="three columns image">
        <p>Year/Date</p>
        <img src={ src } />
        <h3>Title</h3>
        <p>Site(s)</p>
        <p>Artist(s)</p>
      </div>
      <div className="three columns image">
        <p>Year/Date</p>
        <img src={ src } />
        <h3>Title</h3>
        <p>Site(s)</p>
        <p>Artist(s)</p>
      </div>
      <div className="three columns image">
        <p>Year/Date</p>
        <img src={ src } />
        <h3>Title</h3>
        <p>Site(s)</p>
        <p>Artist(s)</p>
      </div>
    </div>
  )
}

Archive.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
}
Archive.defaultProps = {
  src: 'http://contemporary.ookb.co/img/projects/2015-miriam-simun/ghostfood-init.jpg',
}

export default Archive
