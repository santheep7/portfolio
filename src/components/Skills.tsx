'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Typography, Box, Card, CardContent, Chip, LinearProgress } from '@mui/material';
import { DiMongodb, DiNodejs, DiReact, DiHtml5, DiCss3, DiJavascript } from 'react-icons/di';
import { SiExpress, SiRedux, SiMui, SiTypescript, SiGithub } from 'react-icons/si';
import { Build } from '@mui/icons-material';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const skillCategories = {
  frontend: [
    { name: 'React', icon: <DiReact size={40} />, level: 75, color: '#61DAFB' },
    { name: 'Next.js', icon: <DiReact size={40} />, level: 60, color: '#000000' },
    { name: 'JavaScript', icon: <DiJavascript size={40} />, level: 80, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript size={40} />, level: 50, color: '#3178C6' },
    { name: 'HTML5', icon: <DiHtml5 size={40} />, level: 90, color: '#E34F26' },
    { name: 'CSS3', icon: <DiCss3 size={40} />, level: 85, color: '#1572B6' }
  ],
  backend: [
    { name: 'Node.js', icon: <DiNodejs size={40} />, level: 70, color: '#339933' },
    { name: 'Express.js', icon: <SiExpress size={40} />, level: 65, color: '#000000' },
    { name: 'MongoDB', icon: <DiMongodb size={40} />, level: 70, color: '#47A248' },
    { name: 'Prisma', icon: <Build sx={{ fontSize: 40 }} />, level: 45, color: '#2D3748' }
  ],
  tools: [
    { name: 'Material UI', icon: <SiMui size={40} />, level: 75, color: '#007FFF' },
    { name: 'Tailwind CSS', icon: <Build sx={{ fontSize: 40 }} />, level: 70, color: '#06B6D4' },
    { name: 'Bootstrap', icon: <Build sx={{ fontSize: 40 }} />, level: 80, color: '#7952B3' },
    { name: 'Redux', icon: <SiRedux size={40} />, level: 60, color: '#764ABC' },
    { name: 'JWT', icon: <Build sx={{ fontSize: 40 }} />, level: 65, color: '#000000' },
    { name: 'GitHub', icon: <SiGithub size={40} />, level: 75, color: '#181717' }
  ]
};

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.fromTo(
        '.skill-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.skill-bar',
        { width: '0%' },
        {
          width: '100%',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Parallax effect for skill cards - more visible
      const skillCards = document.querySelectorAll('.skill-item');
      skillCards.forEach((card, index) => {
        gsap.to(card, {
          y: -80 * (index % 3 + 1),
          ease: 'none',
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });
    }
  }, []);

  return (
    <Box 
      component="section"
      id="skills" 
      sx={{ 
        py: 10, 
        background: '#d3d3ff',
        color: '#1f1f2e',
        position: 'relative'
      }} 
      ref={skillsRef}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="Skills & Technologies" 
            sx={{ 
              mb: 2, 
              backgroundColor: '#ffffff', 
              color: '#1f1f2e',
              fontWeight: 600,
              px: 2,
              boxShadow: '0 2px 8px rgba(31, 31, 46, 0.1)'
            }} 
          />
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              color: '#1f1f2e'
            }}
          >
            Technical Expertise
          </Typography>
          <Typography variant="h6" sx={{ color: '#4a4a68', maxWidth: '600px', mx: 'auto' }}>
            Proficient in modern web technologies with a focus on performance and scalability
          </Typography>
        </Box>

        {/* Skills Categories */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: 4 
        }}>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <Box key={category}>
              <Card 
                className="skill-item"
                sx={{ 
                  background: '#ffffff',
                  boxShadow: '0 2px 8px rgba(31, 31, 46, 0.1)',
                  borderRadius: '16px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 10px 30px rgba(31, 31, 46, 0.15)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 3, 
                      color: '#1f1f2e',
                      textTransform: 'capitalize',
                      textAlign: 'center'
                    }}
                  >
                    {category === 'frontend' ? 'Frontend' : category === 'backend' ? 'Backend & Database' : 'UI Frameworks & Tools'}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {skills.map((skill, index) => (
                      <Box key={index}>
                        <Box sx={{ mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box sx={{ color: skill.color, mr: 2 }}>
                              {skill.icon}
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                <Typography variant="body1" sx={{ fontWeight: 600, color: '#1f1f2e' }}>
                                  {skill.name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#4a4a68' }}>
                                  {skill.level}%
                                </Typography>
                              </Box>
                              <LinearProgress
                                variant="determinate"
                                value={skill.level}
                                className="skill-bar"
                                sx={{
                                  height: 6,
                                  borderRadius: 3,
                                  backgroundColor: 'rgba(31, 31, 46, 0.1)',
                                  '& .MuiLinearProgress-bar': {
                                    backgroundColor: skill.color,
                                    borderRadius: 3
                                  }
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>


      </Container>
    </Box>
  );
};

export default Skills;