import Nav from "./Components/Nav/Nav";
import TechnicalSkills from "./Components/TechnicalSkills/TechnicalSkills";
import HeroImage from "./Components/HeroImage/HeroImage";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <HeroImage />
      <TechnicalSkills />
      <Projects />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
