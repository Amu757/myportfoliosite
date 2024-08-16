import './App.css';
import Header from './components/header/Header';
import Hero from './components/heropage/Hero';
import About from './components/About';
import Services from './components/services/Services';
import Skills from './components/skills/Skill';
import Projects from './components/projects/projects';
import Contact from './components/Contact';
import Contactform from './components/Contactform';
function App() {
  return (
    <>
   <Header/>
   <Hero/>
   <About/>
   <Services/>
   <Skills/>
   <Projects/>
   {/* <Contact/> */}
   <Contactform/>
  </>
  );
}

export default App;
