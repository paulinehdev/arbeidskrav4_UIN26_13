import './PaulineProfile.css';
import mitsiprofile from '../assets/mitsiprofile.jpg'

export default function PaulineProfile(){
    
    return (
        <article className="pauline-profilkort">
            <img src={mitsiprofile} alt="pauline-profilbilde" />
            <h2>Pauline Haugerud</h2>
            <p>Bachelor i Informasjonssystemer</p>
            <a href="mailto:paulineh@hiof.no">paulineh@hiof.no</a>
        </article>
    )
}