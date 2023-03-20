
import './App.css';
import About from './Components/About';
import Claneder from './Components/Claneder';
import Contact from './Components/Contact';
import Home from './Components/Home';
// import About from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Claneder />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
