import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container, Typography, Box, Grid } from '@mui/material';
import { DiMongodb, DiNodejs, DiReact, DiHtml5, DiCss3, DiJavascript } from 'react-icons/di';
import { SiExpress, SiRedux, SiMui, } from 'react-icons/si';

const skills = [
  { name: 'MongoDB', icon: <DiMongodb size={50} />, level: 85 },
  { name: 'Express.js', icon: <SiExpress size={50} />, level: 80 },
  { name: 'React', icon: <DiReact size={50} />, level: 90 },
  { name: 'Node.js', icon: <DiNodejs size={50} />, level: 85 },
  { name: 'HTML5', icon: <DiHtml5 size={50} />, level: 95 },
  { name: 'CSS3', icon: <DiCss3 size={50} />, level: 90 },
  { name: 'JavaScript', icon: <DiJavascript size={50} />, level: 90 },
  { name: 'Redux', icon: <SiRedux size={50} />, level: 40 },
  { name: 'Material UI', icon: <SiMui size={50} />, level: 50 },
];

const Skills = () => {
  const skillsRef = useRef();

  useEffect(() => {
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
}, []);

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default',fontFamily:'sans-serif' }} ref={skillsRef}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          My Skills
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
          Here are the technologies I work with
        </Typography>
        
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className="skill-item">
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                {skill.icon}
                <Typography variant="h6" component="h3" sx={{ ml: 2 }}>
                  {skill.name}
                </Typography>
              </Box>
              <Box sx={{ width: '100%', height: 8, bgcolor: 'divider', borderRadius: 4 }}>
                <Box
                  className="skill-bar"
                  sx={{
                    width: 0,
                    height: '100%',
                    bgcolor: 'primary.main',
                    borderRadius: 4,
                    maxWidth: `${skill.level}%`
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;