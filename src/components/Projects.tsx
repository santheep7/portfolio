'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Typography, Box, Button, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Project cards animation
      gsap.fromTo(
        '.aceternity-card',
        { opacity: 0, y: 100, rotationX: -15 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <Box 
      component="section"
      id="projects" 
      sx={{ 
        py: 15, 
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
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
              background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
              color: 'white',
              fontWeight: 600,
              px: 3,
              py: 1,
              fontSize: '0.9rem',
              border: '1px solid rgba(255, 107, 107, 0.3)',
              backdropFilter: 'blur(10px)'
            }} 
          />
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ffffff, #f0f0f0)',
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
              color: 'rgba(255, 255, 255, 0.7)', 
              maxWidth: '600px', 
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            A showcase of my MERN stack projects with GSAP animations
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
          gap: 2 
        }}>
          {projects.map((project, index) => (
            <CardContainer key={project.id} className="inter-var" containerClassName="py-5">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                
                {/* Project Image */}
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white mb-2"
                >
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'white',
                      fontSize: '1.4rem'
                    }}
                  >
                    {project.title}
                  </Typography>
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mb-4"
                >
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      lineHeight: 1.6,
                      fontSize: '0.9rem'
                    }}
                  >
                    {project.description.slice(0, 120)}...
                  </Typography>
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <Box sx={{ 
                    position: 'relative', 
                    height: '200px', 
                    overflow: 'hidden',
                    borderRadius: '16px'
                  }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="400px"
                      style={{ 
                        objectFit: 'contain',
                        objectPosition: 'center',
                        padding: '10px'
                      }}
                      className="rounded-xl group-hover/card:shadow-xl"
                    />
                    
                    {/* Category Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: 'rgba(0, 0, 0, 0.8)',
                        borderRadius: '8px',
                        px: 2,
                        py: 1,
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <Typography variant="caption" sx={{ 
                        fontWeight: 700, 
                        color: '#ff6b6b', 
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {project.category}
                      </Typography>
                    </Box>
                  </Box>
                </CardItem>

                {/* Technologies */}
                <CardItem translateZ="80" className="mt-4 mb-4">
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 107, 107, 0.1)',
                          color: '#ff6b6b',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                          border: '1px solid rgba(255, 107, 107, 0.3)',
                          backdropFilter: 'blur(10px)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 107, 107, 0.2)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardItem>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex-1"
                  >
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        fontWeight: 600,
                        borderRadius: '12px',
                        py: 1,
                        fontSize: '0.8rem',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                          transition: 'left 0.6s ease'
                        },
                        '&:hover': {
                          borderColor: 'rgba(255, 107, 107, 0.5)',
                          backgroundColor: 'rgba(255, 107, 107, 0.1)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)',
                          '&::before': {
                            left: '100%'
                          }
                        }
                      }}
                    >
                      Code
                    </Button>
                  </CardItem>
                  
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex-1"
                  >
                    <Button
                      variant="contained"
                      startIcon={<Launch />}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                        fontWeight: 600,
                        borderRadius: '12px',
                        py: 1,
                        fontSize: '0.8rem',
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
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                          transition: 'left 0.6s ease'
                        },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #ff5252, #e53e3e)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 30px rgba(255, 107, 107, 0.4)',
                          '&::before': {
                            left: '100%'
                          }
                        }
                      }}
                    >
                      Live Demo
                    </Button>
                  </CardItem>
                </Box>
              </CardBody>
            </CardContainer>
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
              borderColor: 'rgba(255, 107, 107, 0.5)',
              color: '#ff6b6b',
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
                background: 'linear-gradient(90deg, transparent, rgba(255, 107, 107, 0.1), transparent)',
                transition: 'left 0.6s ease'
              },
              '&:hover': {
                borderColor: '#ff6b6b',
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 35px rgba(255, 107, 107, 0.3)',
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