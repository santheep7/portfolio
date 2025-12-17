'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Typography, Box, Button, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import Image from 'next/image';
import { projects, getTechColor } from '@/lib/projects';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const StackedProjectCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      const cards = cardsRef.current;
      
      // Initial stacked position
      cards.forEach((card, index) => {
        if (card) {
          gsap.set(card, {
            zIndex: projects.length - index,
            y: index * 20,
            rotationX: index * 5,
            transformOrigin: 'center bottom',
            scale: 1 - (index * 0.05)
          });
        }
      });

      // Scroll trigger animation
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 60%',
        end: 'bottom 20%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          
          cards.forEach((card, index) => {
            if (card) {
              const delay = index * 0.1;
              const cardProgress = Math.max(0, Math.min(1, (progress - delay) / (1 - delay)));
              
              gsap.to(card, {
                duration: 0.3,
                y: index * 20 - (cardProgress * (index * 150 + 100)),
                x: (index - 1) * cardProgress * 300,
                rotationY: (index - 1) * cardProgress * 15,
                rotationX: index * 5 - (cardProgress * index * 5),
                scale: 1 - (index * 0.05) + (cardProgress * index * 0.05),
                ease: 'power2.out'
              });
            }
          });
        }
      });

      // Individual card hover effects
      cards.forEach((card, index) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              duration: 0.4,
              scale: 1.05,
              rotationY: 5,
              z: 50,
              boxShadow: '0 25px 50px rgba(255, 107, 107, 0.3)',
              ease: 'power2.out'
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              duration: 0.4,
              scale: 1 - (index * 0.05),
              rotationY: 0,
              z: 0,
              boxShadow: '0 8px 32px rgba(255, 107, 107, 0.1)',
              ease: 'power2.out'
            });
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardsRef.current[index] = el;
    }
  };

  return (
    <Box 
      component="section"
      id="projects" 
      sx={{ 
        py: 15, 
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Chip 
            label="My Work" 
            sx={{ 
              mb: 2, 
              backgroundColor: '#ff6b6b', 
              color: 'white',
              fontWeight: 600,
              px: 2
            }} 
          />
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Featured Projects
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
            Scroll to see my MERN stack projects with GSAP animations in 3D perspective
          </Typography>
        </Box>

        {/* Stacked Cards Container */}
        <Box 
          ref={containerRef}
          sx={{ 
            height: '120vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
            position: 'relative'
          }}
        >
          <Box sx={{ 
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            height: '600px'
          }}>
            {projects.map((project, index) => (
              <Box
                key={project.id}
                ref={(el: HTMLDivElement | null) => addToRefs(el, index)}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: `linear-gradient(145deg, ${
                    index === 0 ? '#ff6b6b' : 
                    index === 1 ? '#4ecdc4' : 
                    '#ffa726'
                  }, ${
                    index === 0 ? '#ee5a24' : 
                    index === 1 ? '#26a69a' : 
                    '#ff9800'
                  })`,
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Card Content */}
                <Box sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  color: 'white',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.2)',
                    zIndex: 1
                  }
                }}>
                  
                  {/* Project Image */}
                  <Box sx={{ 
                    height: '50%', 
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="500px"
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '12px',
                        px: 2,
                        py: 1,
                        zIndex: 2
                      }}
                    >
                      <Typography variant="caption" sx={{ fontWeight: 700, color: '#333', fontSize: '0.75rem' }}>
                        {project.category}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Project Info */}
                  <Box sx={{ 
                    height: '50%', 
                    p: 3, 
                    display: 'flex', 
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <Typography variant="h4" component="h3" sx={{ fontWeight: 800, mb: 2 }}>
                      {project.title}
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6, flexGrow: 1 }}>
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              color: 'white',
                              fontWeight: 600,
                              fontSize: '0.75rem',
                              backdropFilter: 'blur(10px)',
                              border: '1px solid rgba(255, 255, 255, 0.3)'
                            }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            sx={{
                              backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              color: 'white',
                              fontWeight: 600,
                              fontSize: '0.75rem'
                            }}
                          />
                        )}
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<GitHub />}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          flex: 1,
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                          color: 'white',
                          fontWeight: 600,
                          borderRadius: '12px',
                          backdropFilter: 'blur(10px)',
                          '&:hover': {
                            borderColor: 'white',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                          }
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<Launch />}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          flex: 1,
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: '#333',
                          fontWeight: 600,
                          borderRadius: '12px',
                          '&:hover': {
                            backgroundColor: 'white'
                          }
                        }}
                      >
                        Live Demo
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Want to see more of my work?
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GitHub />}
            href="https://github.com/santheep7"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            sx={{
              borderColor: '#ff6b6b',
              color: '#ff6b6b',
              px: 4,
              py: 1.5,
              '&:hover': {
                borderColor: '#ff5252',
                backgroundColor: 'rgba(255, 107, 107, 0.1)'
              }
            }}
          >
            View All Projects on GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default StackedProjectCards;