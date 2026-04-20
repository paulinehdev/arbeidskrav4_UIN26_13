import { useEffect, useState } from "react";
import {client} from '../helpers/client.js'
<source />

export default function Arbeidskrav(){
    const [arbeidskrav, setArbeidskrav] = useState([])

    useEffect(() => {
        client.fetch(`*[_type == "arbeidskrav"]{title, description}`)
        .then(data => setArbeidskrav(data));
    }, []);

    return (
    <section>
        <h2>Arbeidskrav</h2>
        <ul>
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