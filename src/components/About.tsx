'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Typography, Box, Avatar, Card, Chip } from '@mui/material';
import { Code, Speed, Lightbulb, Group } from '@mui/icons-material';
import Image from 'next/image';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Parallax effect for text content - more visible
      gsap.to(textRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Parallax effect for image - more pronounced
      gsap.to(imageRef.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });
    }
  }, []);

  return (
    <Box 
      component="section"
      id="about" 
      sx={{ 
        py: 10, 
        background: '#ffffff',
        position: 'relative'
      }} 
      ref={aboutRef}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="About Me" 
            sx={{ 
              mb: 2, 
              backgroundColor: '#ffffff', 
              color: '#0f0f1a',
              fontWeight: 600,
              px: 2,
              boxShadow: '0 2px 8px rgba(15, 15, 26, 0.1)'
            }} 
          />
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              color: '#0f0f1a',
              mb: 2
            }}
          >
            Crafting Digital Excellence
          </Typography>
          <Typography variant="h6" sx={{ color: '#2d2d45', maxWidth: '600px', mx: 'auto' }}>
            Passionate developer with a mission to build innovative solutions that make a difference
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: 6, 
          alignItems: 'center' 
        }}>
          {/* Content Section */}
          <Box ref={textRef}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 700, 
                  mb: 3,
                  color: '#0f0f1a'
                }}
              >
                Aspiring Full Stack Developer
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: '#2d2d45' }}>
                Recent graduate passionate about web development with hands-on experience in the MERN stack. 
                I enjoy building responsive web applications and learning new technologies to create 
                meaningful digital solutions.
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: '#2d2d45' }}>
                Currently expanding my skills in Next.js, Prisma, and modern UI frameworks. 
                I&apos;m eager to contribute to innovative projects and grow as a developer in a 
                collaborative environment.
              </Typography>

              {/* Stats */}
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr', 
                gap: 3, 
                mb: 4 
              }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#6b6bcc' }}>
                    6+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2d2d45' }}>
                    Months Learning
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontWeight: 800, color: '#6b6bcc' }}>
                    6+
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#2d2d45' }}>
                    Projects Built
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Values Cards */}
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: 2 
            }}>
              {[
                { icon: <Code />, title: 'Clean Code', desc: 'Writing maintainable, scalable solutions' },
                { icon: <Speed />, title: 'Performance', desc: 'Optimized for speed and efficiency' },
                { icon: <Lightbulb />, title: 'Innovation', desc: 'Always exploring new technologies' },
                { icon: <Group />, title: 'Collaboration', desc: 'Team player with strong communication' }
              ].map((item, index) => (
                <Card 
                  key={index}
                  sx={{ 
                    p: 2, 
                    height: '100%',
                    background: '#ffffff',
                    boxShadow: '0 2px 8px rgba(15, 15, 26, 0.1)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(15, 15, 26, 0.15)'
                    }
                  }}
                >
                  <Box sx={{ color: '#6b6bcc', mb: 1 }}>
                    {item.icon}
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5, color: '#0f0f1a' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#2d2d45' }}>
                    {item.desc}
                  </Typography>
                </Card>
              ))}
            </Box>
          </Box>

          {/* Image Section */}
          <Box ref={imageRef}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              {/* Decorative Elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  borderRadius: '50%',
                  opacity: 0.1,
                  zIndex: 0
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -30,
                  left: -30,
                  width: 80,
                  height: 80,
                  background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                  borderRadius: '50%',
                  opacity: 0.1,
                  zIndex: 0
                }}
              />
              
              <Image
                src="/assets/portfolio2.jpg"
                alt="Santheep Krishna V G - About"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 400px"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '400px',
                  borderRadius: '24px',
                  boxShadow: '0 20px 40px rgba(15, 15, 26, 0.1)',
                  border: '4px solid #ffffff',
                  position: 'relative',
                  zIndex: 1,
                }}
                className="hover:scale-102 transition-transform duration-300"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
