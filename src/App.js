
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
// import About from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
