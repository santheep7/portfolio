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

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Floating cards animation
      gsap.fromTo(
        '.floating-card',
        { 
          opacity: 0, 
          y: 150, 
          rotationX: 45,
          rotationY: 15,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Continuous floating animation
      gsap.to('.floating-card', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.5
      });

      // Parallax effect for project cards
      const projectCards = document.querySelectorAll('.floating-card');
      projectCards.forEach((card, index) => {
        gsap.to(card, {
          yPercent: -10 * (index + 1),
          ease: 'none',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }
  }, []);

  return (
    <Box 
      component="section"
      id="projects" 
      sx={{ 
        py: 15, 
        background: 'linear-gradient(180deg, #16213e 0%, #0f3460 100%)',
        position: 'relative',
        overflow: 'hidden'
      }} 
      ref={projectsRef}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(238, 90, 36, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Chip 
            label="My Work" 
            sx={{ 
              mb: 3, 
              backgroundColor: 'rgba(0, 212, 255, 0.15)',
              color: '#00d4ff',
              fontWeight: 600,
              px: 3,
              py: 1,
              fontSize: '0.9rem',
              border: '1px solid rgba(0, 212, 255, 0.3)'
            }} 
          />
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(90deg, #00d4ff, #c77dff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Featured Projects
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'rgba(255,255,255,0.7)', 
              maxWidth: '600px', 
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            A showcase of my MERN stack projects with modern animations
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
          gap: 4,
          perspective: '1000px'
        }}>
          {projects.map((project) => (
            <Box
              key={project.id}
              className="floating-card"
              sx={{
                background: 'rgba(0, 212, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '24px',
                overflow: 'hidden',
                transformStyle: 'preserve-3d',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                '&:hover': {
                  transform: 'translateY(-20px) rotateX(5deg) rotateY(5deg)',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(79, 70, 229, 0.3)'
                }
              }}
            >
              {/* Project Image */}
              <Box sx={{ 
                position: 'relative', 
                height: '220px', 
                overflow: 'hidden'
              }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="400px"
                  style={{ 
                    objectFit: 'contain',
                    objectPosition: 'center',
                    padding: '20px'
                  }}
                />
                
                {/* Category Badge */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
                    borderRadius: '12px',
                    px: 2,
                    py: 1,
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 15px rgba(79, 70, 229, 0.3)'
                  }}
                >
                  <Typography variant="caption" sx={{ 
                    fontWeight: 700, 
                    color: 'white', 
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {project.category}
                  </Typography>
                </Box>
              </Box>

              {/* Project Content */}
              <Box sx={{ p: 3 }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 700, 
                    color: 'white',
                    fontSize: '1.4rem',
                    mb: 2
                  }}
                >
                  {project.title}
                </Typography>

                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.7)', 
                    lineHeight: 1.6,
                    fontSize: '0.9rem',
                    mb: 3
                  }}
                >
                  {project.description.slice(0, 150)}...
                </Typography>

                {/* Technologies */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ color: 'white', mb: 1.5, fontWeight: 600 }}>
                    Technologies Used:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech) => {
                      const techColors = getTechColor(tech);
                      return (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: techColors.bg,
                            color: techColors.color,
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            border: `1px solid ${techColors.border}`,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-2px) scale(1.05)',
                              boxShadow: `0 4px 12px ${techColors.border.replace('0.3', '0.4')}`
                            }
                          }}
                        />
                      );
                    })}
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
                      borderColor: '#10b981',
                      color: '#10b981',
                      fontWeight: 600,
                      borderRadius: '12px',
                      py: 1.2,
                      fontSize: '0.85rem',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                      '&:hover': {
                        borderColor: '#059669',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
                      }
                    }}
                  >
                    View Code
                  </Button>
                  
                  <Button
                    variant="contained"
                    startIcon={<Launch />}
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      flex: 1,
                      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                      fontWeight: 600,
                      borderRadius: '12px',
                      py: 1.2,
                      fontSize: '0.85rem',
                      boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
                      transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #d97706, #b45309)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)'
                      }
                    }}
                  >
                    Live Demo
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 12 }}>
          <Typography variant="h6" sx={{ mb: 3, color: 'white' }}>
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
              borderColor: 'rgba(79, 70, 229, 0.5)',
              color: '#4f46e5',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '16px',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.1), transparent)',
                transition: 'left 0.6s ease'
              },
              '&:hover': {
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 35px rgba(79, 70, 229, 0.3)',
                '&::before': {
                  left: '100%'
                }
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

export default Projects;