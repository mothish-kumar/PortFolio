import { useRef } from 'react'
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Project from './components/Project';
import Contact from './components/Contact';
import { Toaster } from 'sonner';
import Footer from './components/Footer';

function App() {


  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Toaster position="top-right" richColors />
     <Header onNavClick={handleScroll} refs={{ homeRef, aboutRef, servicesRef, projectsRef, contactRef }}/>
            <div ref={homeRef}><Home /></div>
            <div ref={aboutRef}><About /></div>
            <div ref={servicesRef}><Service /></div>
            <div ref={projectsRef}><Project /></div>
            <div ref={contactRef}><Contact /></div>
      <Footer/>
    </>
  )
}

export default App  
