import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { AppBar, Toolbar, Typography, Box, Button, useScrollTrigger } from '@mui/material';
import ThemeToggle from '../components/ThemeToggle';
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ darkMode, toggleTheme }) => {
  const headerRef = useRef();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

 useEffect(() => {
  gsap.fromTo(
    headerRef.current,
    { opacity: 0, y: -50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.2,
    }
  );
}, []);


  return (
    <AppBar
      ref={headerRef}
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: trigger ? 'background.paper' : 'transparent',
        color: 'text.primary',
        transition: 'all 0.3s ease',
        backdropFilter: trigger ? 'blur(10px)' : 'none',
        py: 1
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          <Box component="span" sx={{ color: 'primary.main' }}></Box>
          SANTHEEP KRISHNA V G
          <Box component="span" sx={{ color: 'primary.main' }}></Box>
        </Typography>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <ScrollLink to="home" smooth={true} duration={500}>
            <Button color="inherit">Home</Button>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500}>
            <Button color="inherit">About</Button>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500}>
            <Button color="inherit">Skills</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500}>
            <Button color="inherit">Projects</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>
            <Button color="inherit">Contact</Button>
          </ScrollLink>
        </Box>
        
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;