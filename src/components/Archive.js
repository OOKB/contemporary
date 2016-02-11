import React, { PropTypes } from 'react'

function Archive({ children, src }) {
  return (
    <div className="archive">
      <div className="three columns image">
        <img src={ src } />
      </div>
      <div className="three columns image">
        <img src={ src } />
      </div>
      <div className="three columns image">
        <img src={ src } />
      </div>
      <div className="three columns image">
        <img src={ src } />
      </div>
      <div className="three columns image">
        <img src={ src } />
      </div>
      <div className="three columns image">
        <img src={ src } />
      </div>
      <div className="three columns image">
        <img src={ src } />
      </div>
      <div className="three columns image">
        <img src={ src } />
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
