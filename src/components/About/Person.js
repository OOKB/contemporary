import React, { PropTypes } from 'react'

function Person({ }) {
  return (
    <div className="two columns bio text-center">
      <img src="http://contemporary.ookb.co/img/headshot/staff-2015/deana.jpg" className="img-circle" />
      <h2>Deana Haggag</h2>
      <h3>Direction</h3>
      <div className="email">
        <a href="mailto:dhaggag@contemporary.org">dhaggag@contemporary.org</a>
      </div>
      <p className="hidden">Deana Haggag has been the Director of The Contemporary since the spring of 2013. Prior to her work with the museum, she was the Curator-in-Residence at Gallery CA, which is also located in Baltimore, MD in the City Arts building — home to over 90 artists. Deana received her MFA in Curatorial Practice from the Maryland Institute College of Art and a BA from Rutgers University in Art History and Philosophy. In addition to her work at The Contemporary, Deana lectures extensively, consults on various public art initiatives, contributes to cultural publications, and teaches at institutions such as Towson University and Johns Hopkins University. She is on the board of the Greater Baltimore Cultural Alliance, is an advisory member for FORCE, and founded the Baltimore Chapter of the Awesome Foundation. She also serves as a member of the Affiliates Board for the Museums and Society Program at Johns Hopkins University and is an active participant of the StageOne/FANS council at the Baltimore School for the Arts. Deana was named “10 People to Watch Under 30” by the Baltimore Sun in 2013 and a “Young Cultural Innovator” by the Salzburg Global Forum in 2015.</p>
    </div>
  )
}

Person.propTypes = {
}
Person.defaultProps = {
}

export default Person
