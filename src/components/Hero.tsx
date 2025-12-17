'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container, Typography, Button, Box, Chip } from '@mui/material';
import { Download, GitHub, LinkedIn, Mail } from '@mui/icons-material';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    // Add elastic hover effect to name
    const nameElement = document.querySelector('.elastic-name');
    if (nameElement) {
      nameElement.addEventListener('mouseenter', () => {
        gsap.to(nameElement, {
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      });

      nameElement.addEventListener('mouseleave', () => {
        gsap.to(nameElement, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    }
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
          
          {/* Text Content */}
          <ScrollReveal direction="left" duration={1.2}>
            <Box ref={textRef} sx={{ flex: 1, color: 'white' }}>
              {/* Status Badge */}
              <Chip 
                label="🎓 Fresh Graduate • Open to Opportunities" 
                sx={{ 
                  mb: 3, 
                  backgroundColor: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }} 
              />
              
              <Typography variant="h6" sx={{ mb: 1, opacity: 0.9 }}>
                Hello, I&apos;m
              </Typography>
              
              <Box sx={{ mb: 2, position: 'relative', overflow: 'visible' }}>
                <Typography 
                  variant="h1" 
                  component="h1" 
                  className="aceternity-text-animate"
                  sx={{ 
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem', lg: '3.8rem' },
                    fontWeight: 900,
                    lineHeight: 1,
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    display: 'inline-block',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 25%, #ffffff 50%, #e0e0e0 75%, #ffffff 100%)',
                    backgroundSize: '400% 100%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'aceternity-shine 3s ease-in-out infinite',
                    letterSpacing: '0.02em',
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)',
                      backgroundSize: '200% 100%',
                      animation: 'aceternity-sweep 4s ease-in-out infinite',
                      mixBlendMode: 'overlay',
                      pointerEvents: 'none'
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '-10px',
                      left: '-10px',
                      right: '-10px',
                      bottom: '-10px',
                      background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.3), transparent, rgba(238, 90, 36, 0.3))',
                      borderRadius: '12px',
                      opacity: 0,
                      transition: 'opacity 0.6s ease',
                      filter: 'blur(20px)',
                      zIndex: -1,
                      pointerEvents: 'none'
                    },
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                      '&::after': {
                        opacity: 1
                      }
                    }
                  }}
                >
                  SANTHEEP KRISHNA V G
                </Typography>
              </Box>
              
              <Typography 
                variant="h4" 
                component="h2" 
                sx={{ 
                  mb: 3,
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 600
                }}
              >
                Aspiring MERN Stack Developer
              </Typography>
              
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 4, 
                  opacity: 0.9,
                  maxWidth: '500px',
                  lineHeight: 1.6
                }}
              >
                Fresh graduate passionate about building modern web applications. 
                Learning and growing with React, Node.js, and emerging technologies.
              </Typography>

              {/* Tech Stack Pills */}
              <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Prisma'].map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.25)'
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
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: '#667eea',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: '50px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    '&:hover': {
                      backgroundColor: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Get In Touch
                </Button>

                <Button
                  size="large"
                  className="hero-button"
                  startIcon={<Download />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: '50px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)',
                      borderColor: 'rgba(255,255,255,0.6)'
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
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transform: 'scale(1.1)'
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
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      transform: 'scale(1.1)'
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
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
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