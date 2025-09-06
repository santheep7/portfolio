import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container, Typography, Box, Grid, Avatar } from '@mui/material';
import pic2 from '../assets/portfolio2.jpg';

const About = () => {
  const aboutRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
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
}, []);


  return (
    <Box id="about" sx={{ py: 8, bgcolor: 'background.paper' }} ref={aboutRef}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
          Get to know me better
        </Typography>
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6} ref={textRef}>
            <Typography variant="h5" gutterBottom>
              I'm a passionate MERN Stack Developer
            </Typography>
            <Typography variant="body1" paragraph>
              With a strong foundation in JavaScript and modern web technologies, 
              I specialize in building responsive, user-friendly web applications 
              using the MERN stack (MongoDB, Express.js, React, and Node.js).
            </Typography>
            <Typography variant="body1" paragraph>
              My journey in web development began during my college years, and 
              since then I've been constantly learning and improving my skills 
              through personal projects and open-source contributions.
            </Typography>
            <Typography variant="body1" paragraph>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to developer communities, or working on my next side project.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} ref={imageRef}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                src={pic2}
                alt="About Me"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '400px',
                  borderRadius: '16px',
                  boxShadow: 3
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;