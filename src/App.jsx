import Navbar from "./components/Navbar.jsx";
import BackgroundPattern from "./components/BackgroundPattern.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <BackgroundPattern />
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
