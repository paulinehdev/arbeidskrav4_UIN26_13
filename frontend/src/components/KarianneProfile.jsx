import profilbilde from "../assets/profilbilde.jpg"
import './KarianneProfile.css'
export default function KarianneProfile(){

    return(
        <article className="profil">
        <h2 className="name">Karianne Paulsen</h2>
        <a className="mail" href="mailto:klpaulse@hiof.no">klpaulse@hiof.no</a>
        <img className="profilbilde" src={profilbilde} alt="profil"/>
        <p className="studie">Informasjonssystemer</p>
        </article>
    )
}