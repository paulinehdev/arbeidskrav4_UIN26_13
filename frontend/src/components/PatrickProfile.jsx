import './PatrickProfile.css';
import profilBilde from './Meg når jeg studerer.jpg';

export default function PatrickProfile() {

  return (
    <article className="patrick-profile-kort">
      <header>
        <img 
          src="Meg når jeg studerer.jpg" 
          alt="Bildet av selveste patrick!" 
        />
        <h2>Patrick Jacobsen</h2>
      </header>
      <p>Bachelor i informasjonssystemer</p>
      <a href="mailto:patricja@hiof.no">Send meg en mail!</a>
    </article>
  )
}