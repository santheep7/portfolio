import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/contact';
import Footer from './components/footer';
import { lightTheme,darkTheme} from './styles/theme';
import './styles/global.css'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // GSAP animations initialization
    initAnimations();
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

 const initAnimations = () => {
  gsap.fromTo(
    'section',
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: 'section',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
};


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header darkMode={darkMode} toggleTheme={toggleTheme} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;