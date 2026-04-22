import './App.css'
import Arbeidskrav from './components/Arbeidskrav'
import FaithProfile from './components/FaithProfile'
import KarianneProfile from './components/KarianneProfile'
import PatrickProfile from './components/PatrickProfile'
import PaulineProfile from './components/PaulineProfile'

function App() {
  

   return (
    <>
    <header>
      <h1>Gruppe 13</h1>
    </header>

    <main>
      <h2>Gruppemedlemmer</h2>
      <section className="medlem-kort">    
        {/* Her skal vi lage komponentene våre */}
        <FaithProfile />
        <KarianneProfile />
        <PatrickProfile />
        <PaulineProfile />
      </section>

      <Arbeidskrav />
    </main>
    </>
  )
}

export default App
