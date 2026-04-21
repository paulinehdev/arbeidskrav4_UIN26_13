import './FaithProfile.css';
import faithImg from '../assets/faithprofile.jpg'



export default function FaithProfile(){
    return (
        <article className="faith-profil">
            <img className="faith-bilde" src={faithImg} alt="Profilbilde" />
            <h2 className="faith-name">Faith Engabou Akwagoh</h2>
            <p className="faith-studie">Bachelor i informasjonssystemer</p>
            <a className ="faith-mail" href="mailto:faithea@hiof.no">Kontakt meg!</a>
        </article>
    )
}

