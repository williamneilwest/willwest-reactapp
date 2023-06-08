import './App.css';
import React, {useEffect} from 'react'
import Navbar from './components/Navbar';
import Hiro from './components/Hiro';
import Skills from './components/Skills'
import Accomplishments from './components/Accomplishments';
import Projects from './components/Projects';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';





function App() {
    useEffect(() => {
      document.title = 'William West';
      AOS.init();
    }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Hiro />
      <Skills />
      <Projects />
      <Accomplishments />
      <Footer />
    </div>
  );
}

export default App;
