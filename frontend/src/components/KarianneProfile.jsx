import profilbilde from "../assets/volleyballjente.avif"
import './KarianneProfile.css'
export default function KarianneProfile(){

    return(
        <article className="profil">
        <img className="profilbilde" src={profilbilde} alt="profil"/>
        <h2 className="name">Karianne Paulsen</h2>
        <a className="mail" href="mailto:klpaulse@hiof.no">klpaulse@hiof.no</a>
        <p className="studie">Bachleor i Informasjonssystemer</p>
        </article>
    )
}