'use client';

import { useRef } from 'react';
import { Container, Typography, Box, Button, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';
import Image from 'next/image';
import { projects, getTechColor } from '@/lib/projects';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <Box 
      component="section"
      id="projects" 
      sx={{ 
        py: 15, 
        background: '#ffffff',
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
              backgroundColor: '#ffffff',
              color: '#0f0f1a',
              fontWeight: 600,
              px: 3,
              py: 1,
              fontSize: '0.9rem',
              boxShadow: '0 2px 8px rgba(15, 15, 26, 0.1)'
            }} 
          />
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              color: '#0f0f1a',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Featured Projects
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#2d2d45', 
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
          gridTemplateColumns: { 
            xs: '1fr', 
            md: 'repeat(2, 1fr)', 
            lg: 'repeat(3, 1fr)' 
          }, 
          gap: 4,
          justifyItems: 'center'
        }}>
          {projects.map((project) => (
            <CardContainer
              key={project.id}
              containerClassName="w-full flex justify-center"
            >
                <CardBody
                  className="relative group/card w-[370px] h-auto rounded-2xl overflow-hidden"
                >
                  {/* Modern Glass Card Background */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: '#ffffff',
                      boxShadow: '0 2px 8px rgba(15, 15, 26, 0.1)',
                      borderRadius: '16px'
                    }}
                  />

                  {/* Content Container */}
                  <Box sx={{ position: 'relative', zIndex: 1, p: 3 }}>
                    {/* Project Image */}
                    <CardItem translateZ="100" className="w-full mb-4">
                        <Box sx={{ 
                        position: 'relative', 
                        height: '200px', 
                        overflow: 'hidden',
                        borderRadius: '12px',
                        background: 'rgba(211, 211, 255, 0.1)',
                        border: '1px solid rgba(15, 15, 26, 0.1)'
                      }}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="370px"
                          quality={75}
                          loading="lazy"
                          style={{ 
                            objectFit: 'contain',
                            objectPosition: 'center',
                            padding: '15px'
                          }}
                        />
                        
                        {/* Category Badge */}
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            background: '#6b6bcc',
                            borderRadius: '8px',
                            px: 2,
                            py: 0.5,
                            boxShadow: '0 4px 15px rgba(107, 107, 204, 0.3)'
                          }}
                        >
                          <Typography variant="caption" sx={{ 
                            fontWeight: 700, 
                            color: '#ffffff', 
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            {project.category}
                          </Typography>
                        </Box>
                      </Box>
                    </CardItem>

                    {/* Project Title */}
                    <CardItem
                      translateZ="50"
                      className="mb-2"
                    >
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700, 
                          color: '#0f0f1a',
                          fontSize: '1.25rem'
                        }}
                      >
                        {project.title}
                      </Typography>
                    </CardItem>

                    {/* Project Description */}
                    <CardItem
                      translateZ="60"
                      className="mb-4"
                    >
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#2d2d45', 
                          lineHeight: 1.6,
                          fontSize: '0.85rem'
                        }}
                      >
                        {project.description.slice(0, 120)}...
                      </Typography>
                    </CardItem>

                    {/* Technologies */}
                    <CardItem translateZ="70" className="mb-4">
                      <Typography variant="subtitle2" sx={{ color: '#0f0f1a', mb: 1, fontWeight: 600, fontSize: '0.75rem' }}>
                        Tech Stack
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                        {project.technologies.slice(0, 6).map((tech) => {
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
                                fontSize: '0.65rem',
                                height: '24px',
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
                    </CardItem>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                      <CardItem
                        translateZ={20}
                        className="flex-1"
                      >
                        <Button
                          variant="outlined"
                          startIcon={<GitHub sx={{ fontSize: '16px' }} />}
                          component="a"
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          fullWidth
                          sx={{
                            borderColor: '#6b6bcc',
                            color: '#0f0f1a',
                            fontWeight: 600,
                            borderRadius: '10px',
                            py: 1,
                            fontSize: '0.75rem',
                            textTransform: 'none',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              borderColor: '#5555aa',
                              backgroundColor: 'rgba(107, 107, 204, 0.1)',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 20px rgba(107, 107, 204, 0.3)'
                            }
                          }}
                        >
                          Code
                        </Button>
                      </CardItem>
                      
                      <CardItem
                        translateZ={20}
                        className="flex-1"
                      >
                        <Button
                          variant="contained"
                          startIcon={<Launch sx={{ fontSize: '16px' }} />}
                          component="a"
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          fullWidth
                          sx={{
                            background: '#6b6bcc',
                            color: '#ffffff',
                            fontWeight: 600,
                            borderRadius: '10px',
                            py: 1,
                            fontSize: '0.75rem',
                            textTransform: 'none',
                            boxShadow: '0 4px 15px rgba(107, 107, 204, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: '#5555aa',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 8px 25px rgba(107, 107, 204, 0.4)'
                            }
                          }}
                        >
                          Demo
                        </Button>
                      </CardItem>
                    </Box>
                  </Box>
                </CardBody>
              </CardContainer>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', mt: 12 }}>
          <Typography variant="h6" sx={{ mb: 3, color: '#0f0f1a' }}>
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
              borderColor: '#6b6bcc',
              color: '#0f0f1a',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              borderRadius: '16px',
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
                background: 'linear-gradient(90deg, transparent, rgba(107, 107, 204, 0.1), transparent)',
                transition: 'left 0.6s ease'
              },
              '&:hover': {
                borderColor: '#5555aa',
                backgroundColor: 'rgba(107, 107, 204, 0.1)',
                transform: 'translateY(-3px)',
                boxShadow: '0 15px 35px rgba(107, 107, 204, 0.3)',
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
