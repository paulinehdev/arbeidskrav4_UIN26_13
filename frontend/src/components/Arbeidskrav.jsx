import { useEffect, useState } from "react";
import {client} from '../helpers/client.js'
import '../style/arbeidskrav.css'


export default function Arbeidskrav(){
    const [arbeidskrav, setArbeidskrav] = useState([])

    useEffect(() => {
        client.fetch(`*[_type == "arbeidskrav"]{title, description}`)
        .then(data => setArbeidskrav(data));
    }, []);

    return (
    <section className="arbeidskrav-layout">
        <h2>Arbeidskrav</h2>
        <ul >
            {arbeidskrav.map((ak) => (
                <li key={ak.title}>
                    <h3>{ak.title}</h3>
                    <p>{ak.description}</p>
                </li>
            ))}
        </ul>
    </section>
    );
}