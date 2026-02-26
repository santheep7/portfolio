'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Container, Typography, Button, Box, Chip } from '@mui/material';
import { Download, GitHub, LinkedIn, Mail } from '@mui/icons-material';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import ShinyText from './ui/ShinyText';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
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

    // Enhanced letter animations with GSAP
    const letters = document.querySelectorAll('.letter-animate');
    if (letters.length > 0) {
      // Initial letter reveal animation
      gsap.fromTo(letters, 
        { 
          opacity: 0, 
          y: 50, 
          rotationX: -90,
          scale: 0.5
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          delay: 1
        }
      );

      // Individual letter hover effects
      letters.forEach((letter) => {
        letter.addEventListener('mouseenter', () => {
          gsap.to(letter, {
            scale: 1.2,
            y: -10,
            rotationY: 15,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        letter.addEventListener('mouseleave', () => {
          gsap.to(letter, {
            scale: 1,
            y: 0,
            rotationY: 0,
            duration: 0.4,
            ease: 'elastic.out(1, 0.5)'
          });
        });
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      component="section"
      ref={heroRef}
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#d3d3ff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
          
          {/* Text Content */}
          <ScrollReveal direction="left" duration={1.2}>
            <Box ref={textRef} sx={{ flex: 1, color: '#0f0f1a', overflow: 'visible' }}>
              {/* Status Badge */}
              <Chip 
                label="🎓 Fresh Graduate • Open to Opportunities" 
                sx={{ 
                  mb: 3, 
                  backgroundColor: '#ffffff', 
                  color: '#0f0f1a',
                  boxShadow: '0 2px 8px rgba(15, 15, 26, 0.1)',
                  fontWeight: 600
                }} 
              />
              
              <Typography variant="h6" sx={{ mb: 1, opacity: 0.9 }}>
                Hello, I&apos;m
              </Typography>
              
              <Box sx={{ mb: 3, position: 'relative', overflow: 'visible', width: 'fit-content', maxWidth: '100%' }}>
                {/* Floating particles effect */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                    pointerEvents: 'none',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '10%',
                      left: '10%',
                      width: '4px',
                      height: '4px',
                      background: 'rgba(255, 255, 255, 0.8)',
                      borderRadius: '50%',
                      animation: 'float-particle-1 4s ease-in-out infinite'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '70%',
                      right: '15%',
                      width: '3px',
                      height: '3px',
                      background: 'rgba(255, 107, 107, 0.8)',
                      borderRadius: '50%',
                      animation: 'float-particle-2 3s ease-in-out infinite reverse'
                    }
                  }}
                />
                
                <Box
                  sx={{
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.2rem', lg: '3.8rem' },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    whiteSpace: { xs: 'normal', sm: 'nowrap' },
                    position: 'relative',
                    display: 'inline-block',
                    cursor: 'pointer',
                    letterSpacing: '0.02em'
                  }}
                >
                  <ShinyText
                    text="SANTHEEP KRISHNA V G"
                    speed={3}
                    color="#00d4ff"
                    shineColor="#ffffff"
                    spread={90}
                    direction="left"
                    className="font-extrabold"
                  />
                </Box>
              </Box>
              
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  mb: 3,
                  color: '#0f0f1a',
                  fontWeight: 600
                }}
              >
                Aspiring MERN Stack Developer
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  color: '#2d2d45',
                  maxWidth: '500px',
                  lineHeight: 1.6
                }}
              >
                Fresh graduate passionate about building modern web applications. 
                Learning and growing with React, Node.js, and emerging technologies.
              </Typography>

              {/* Tech Stack Pills */}
              <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1.5, maxWidth: '500px' }}>
                {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Prisma'].map((tech, index) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="medium"
                    sx={{
                      backgroundColor: '#ffffff',
                      color: '#0f0f1a',
                      boxShadow: '0 2px 8px rgba(15, 15, 26, 0.1)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(15, 15, 26, 0.15)'
                      }
                    }}
                  />
                ))}
              </Box>
              
              {/* Action Buttons */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                <Button
                  size="large"
                  className="hero-button"
                  startIcon={<Mail />}
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    backgroundColor: '#6b6bcc',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: '50px',
                    '&:hover': {
                      backgroundColor: '#5555aa',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(107, 107, 204, 0.3)'
                    }
                  }}
                >
                  Get In Touch
                </Button>

                <Button
                  size="large"
                  className="hero-button"
                  startIcon={<Download />}
                  component="a"
                  href="/Santheep_Krishna__CV.pdf"
                  download="Santheep_Krishna_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 4,
                    py: 1.5,
                    color: '#0f0f1a',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: '50px',
                    border: '2px solid #6b6bcc',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(107, 107, 204, 0.1)',
                      transform: 'translateY(-2px)',
                      borderColor: '#5555aa'
                    }
                  }}
                >
                  Download CV
                </Button>
              </Box>

              {/* Social Links */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  className="hero-button"
                  startIcon={<GitHub />}
                  href="https://github.com/santheep7"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 'auto',
                    p: 1.5,
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    color: '#0f0f1a',
                    boxShadow: '0 2px 8px rgba(15, 15, 26, 0.1)',
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      transform: 'scale(1.1)',
                      boxShadow: '0 4px 12px rgba(15, 15, 26, 0.15)'
                    }
                  }}
                />
                <Button
                  className="hero-button"
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/santheep-krishna-95a573276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    minWidth: 'auto',
                    p: 1.5,
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    color: '#0f0f1a',
                    boxShadow: '0 2px 8px rgba(15, 15, 26, 0.1)',
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      transform: 'scale(1.1)',
                      boxShadow: '0 4px 12px rgba(15, 15, 26, 0.15)'
                    }
                  }}
                />
              </Box>
            </Box>
          </ScrollReveal>

          {/* Profile Image Section */}
          <ScrollReveal direction="right" duration={1.2} delay={0.3}>
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
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: -20,
                    bottom: -20,
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    borderRadius: '50%',
                    animation: 'float 6s ease-in-out infinite'
                  }
                }}
              >
                <Image
                  src="/assets/portfolio.jpg"
                  alt="Santheep Krishna V G - Full Stack Developer"
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 300px, 400px"
                  quality={80}
                  priority
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid #ffffff',
                    boxShadow: '0 10px 40px rgba(15, 15, 26, 0.15)',
                    position: 'relative',
                    zIndex: 1,
                    transition: 'transform 0.3s ease',
                  }}
                  className="hover:scale-105"
                />
              </Box>
            </Box>
          </ScrollReveal>
          
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
