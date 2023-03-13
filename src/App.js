import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
  <div>
    <title> 
      My Portfolio
    </title>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Contact/>
  </div>
  );
}

export default App;
