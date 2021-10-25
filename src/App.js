import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './components/Navbar'

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>

        <Route exact path="/">
          <About />
        </Route>
        
        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/resume">
          <Resume />
        </Route>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
