import { Route, Routes } from "react-router-dom"
import NavBar from "./Component/NavBar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Projects from "./Pages/Project"
import Contact from "./Pages/Contact"
import Footer from "./Component/Footer"
import Hero from "./Component/Hero"

function App() {
  return (
    <>
      <section>
        <NavBar />
              <main>
                <section id="home"><Hero /></section>
                <section id="about"><About /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
              </main>
              <Footer />
      </section>
    </>
  )
}

export default App