import { Navbar } from "./layout/Navbar.jsx";
import { Contact } from "./sections/Contact.jsx";
import { Experience } from "./sections/Experience.jsx";
import { Hero } from "./sections/Hero.jsx";
import { Project } from "./sections/Project.jsx";
import { Techstack } from "./sections/Techstack.jsx";

function App() {
  return (
    <div className="min-h-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Techstack />
        <Project />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
