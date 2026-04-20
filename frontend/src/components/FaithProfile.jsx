import './FaithProfile.css';
import faithImg from '../assets/faithprofile.jpg'


export default function FaithProfile(){
    return (
        <article>
            <img src={faithImg} alt="Profilbilde" />
            <h2>Faith Engabou Akwagoh</h2>
            <p>Bachelor i informasjonssystemer</p>
            <a href="mailto:faithea@hiof.no">faithea@hiof.no</a>
        </article>
    )
}