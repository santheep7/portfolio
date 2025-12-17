'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Typography, Box, Card, CardContent, Button, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import Image from 'next/image';
import { projects, getTechColor } from '@/lib/projects';
import dynamic from 'next/dynamic';

// Dynamically import 3D component to avoid SSR issues
const Project3DShowcase = dynamic(() => import('./Project3D'), { ssr: false });

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
        '.project-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Technology chips glow effect - only if elements exist
      const techChips = document.querySelectorAll('.tech-chip');
      if (techChips.length > 0) {
        gsap.to('.tech-chip', {
          boxShadow: '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 107, 107, 0.4)',
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power2.inOut',
          stagger: {
            amount: 1,
            from: 'random'
          }
        });

        // Hover effect for tech chips
        techChips.forEach((chip) => {
          chip.addEventListener('mouseenter', () => {
            gsap.to(chip, {
              scale: 1.1,
              boxShadow: '0 0 25px rgba(255, 107, 107, 0.8), 0 0 50px rgba(255, 107, 107, 0.6)',
              duration: 0.3,
              ease: 'power2.out'
            });
          });

          chip.addEventListener('mouseleave', () => {
            gsap.to(chip, {
              scale: 1,
              boxShadow: '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(255, 107, 107, 0.4)',
              duration: 0.3,
              ease: 'power2.out'
            });
          });
        });
      }
    }
  }, []);

  return (
    <Box 
      component="section"
      id="projects" 
      sx={{ 
        py: 10, 
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        position: 'relative'
      }} 
      ref={projectsRef}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
            A showcase of my MERN stack projects with GSAP animations
          </Typography>
        </Box>

        {/* 3D Projects Showcase */}
        <Box sx={{ mb: 8 }}>
          <Project3DShowcase 
            projects={projects.map((project, index) => ({
              title: project.title,
              color: ['#667eea', '#FF6B6B', '#FFD700'][index] || '#667eea',
              onClick: () => window.open(project.liveLink, '_blank')
            }))}
          />
        </Box>

        {/* Projects Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, 
          gap: 4 
        }}>
          {projects.map((project) => (
            <Box key={project.id}>
              <Card 
                className="project-card"
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, #ffffff, #f0f2f5)',
                  border: '1px solid rgba(255, 107, 107, 0.1)',
                  boxShadow: '0 8px 32px rgba(255, 107, 107, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 60px rgba(255, 107, 107, 0.2)',
                    border: '1px solid rgba(255, 107, 107, 0.3)'
                  }
                }}
              >
                {/* Project Image */}
                <Box sx={{ position: 'relative', height: 250, overflow: 'hidden' }}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ 
                      objectFit: 'contain',
                      objectPosition: 'center',
                      padding: '10px'
                    }}
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                      borderRadius: '12px',
                      px: 2,
                      py: 1,
                      boxShadow: '0 4px 15px rgba(238, 90, 36, 0.3)'
                    }}
                  >
                    <Typography variant="caption" sx={{ fontWeight: 700, color: 'white', fontSize: '0.75rem' }}>
                      {project.category}
                    </Typography>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  {/* Project Title */}
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
                    {project.title}
                  </Typography>

                  {/* Project Description */}
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>

                  {/* Technologies */}
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => {
                        const techColors = getTechColor(tech);
                        return (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            className="tech-chip"
                            sx={{
                              backgroundColor: techColors.bg,
                              color: techColors.color,
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              border: `1px solid ${techColors.border}`,
                              cursor: 'pointer',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              '&:hover': {
                                transform: 'translateY(-3px) scale(1.05)',
                                boxShadow: `0 8px 25px ${techColors.border.replace('0.3', '0.6')}`
                              }
                            }}
                          />
                        );
                      })}
                    </Box>
                  </Box>

                  {/* Action Buttons */}
                  <Box sx={{ display: 'flex', gap: 2, mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        flex: 1,
                        borderColor: '#ff6b6b',
                        color: '#ff6b6b',
                        fontWeight: 600,
                        borderRadius: '12px',
                        py: 1.2,
                        '&:hover': {
                          borderColor: '#ff5252',
                          backgroundColor: 'rgba(255, 107, 107, 0.1)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(255, 107, 107, 0.3)'
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
                        background: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
                        fontWeight: 600,
                        borderRadius: '12px',
                        py: 1.2,
                        boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #ff5252, #e53e3e)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)'
                        }
                      }}
                    >
                      Live Demo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
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

export default Projects;