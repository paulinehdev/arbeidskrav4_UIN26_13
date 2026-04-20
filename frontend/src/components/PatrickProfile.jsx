import './PatrickProfile.css';
import profilBilde from '../assets/Meg når jeg studerer.jpg';

export default function PatrickProfile() {

  return (
    <article className="patrick-profile-kort">
      <header>
        <img 
          src={profilBilde}
          alt="Bildet av selveste patrick!" 
        />
        <h2>Patrick Jacobsen</h2>
      </header>
      <p>Bachelor i informasjonssystemer</p>
      <a href="mailto:patricja@hiof.no">Send meg en mail!</a>
    </article>
  )
}