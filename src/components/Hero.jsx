import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container, Typography, Button, Box } from '@mui/material';
import profilepic from '../assets/portfolio.jpg';

const Hero = () => {
  const heroRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.8,
        ease: 'back.out(1.7)'
      }
    );

    gsap.fromTo(
      '.hero-button',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.2,
        stagger: 0.2
      }
    );
  }, []);


  return (
    <Box
      ref={heroRef}
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        fontFamily:'sans-serif',
        pt: 8
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
          <Box ref={textRef} sx={{ flex: 1, pr: { md: 4 } }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Hi, I'm <span style={{ color: '#3f51b5' }}>SANTHEEP KRISHNA V G</span>
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
              MERN Stack Developer
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              Passionate about building modern web applications with MongoDB, Express, React, and Node.js
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
  <Button
    size="large"
    className="hero-button"
    href="#contact"
    sx={{
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'none',
      background: 'linear-gradient(-45deg, #00c6ff, #0072ff, #00c6ff)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 6s ease infinite',
      '@keyframes gradientShift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' }
      }
    }}
  >
    Contact Me
  </Button>

  <Button
    size="large"
    className="hero-button"
    href="#projects"
    sx={{
      color: '#fff',
      fontWeight: 'bold',
      textTransform: 'none',
      background: 'linear-gradient(-45deg, #ff416c, #ff4b2b, #ff416c)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 6s ease infinite',
      '@keyframes gradientShift': {
        '0%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
        '100%': { backgroundPosition: '0% 50%' }
      }
    }}
  >
    View Projects
  </Button>
</Box>

          </Box>
          <Box
            ref={imageRef}
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              mt: { xs: 4, md: 0 }
            }}
          >
            <Box
              component="img"
              src={profilepic}
              alt="Profile"
              sx={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                boxShadow: 3,
                border: '5px solid',
                borderColor: 'primary.main',
                objectFit: 'cover',          // crop and cover entire container
                objectPosition: 'center',    // position of zoom focus
              }}

            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;