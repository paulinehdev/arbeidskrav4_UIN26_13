import mitsi from '../assets/mitsi.jpg'

export default function PaulineProfile(){
    
    return (
        <article>
            <img src={mitsi} alt="pauline-profilbilde" />
            <h2>Pauline Haugerud</h2>
            <p>Bachelor i Informasjonssystemer</p>
            <a href="mailto:paulineh@hiof.no">paulineh@hiof.no</a>
        </article>
    )
}