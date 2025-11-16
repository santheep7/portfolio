import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const projects = [
  {
    title: 'Bike Buddies',
    description: 'Bike Buddie is an online bike booking platform built using the MERN stack with NLP sentiment analysis integration. Inspired by cab services, it allows users to book rides from bike owners, choose pickup/destination, add luggage preferences, and pay before or after the ride. Riders can register their bikes, set rates, and receive bookings. Admins can monitor and manage users, bookings, and feedback.',
    image: '/BikeBuddie.png',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'NLP', 'JWT', 'otp-login', 'material-ui', 'Bootstrap'],
    code: 'https://github.com/santheep7/BikeBuddie.git',
    Demo:'https://bikebuddie-1.onrender.com/'
  },
  {
    title: 'ShopinGo',
    description: 'ShopinGo is a fully functional e-commerce platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It features product browsing, shopping cart, and checkout flow, with a clean UI and responsive design. Built to simulate a real-world online store with dynamic front-end interactions and secure backend operations.',
    image: '/ShopinGo.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose', 'CSS', 'JWT Auth', 'GSAP', 'Tailwind CSS'],
    code: 'https://github.com/santheep7/ShopinGo.git',
    Demo:'https://shopin-go.vercel.app/'
  },
  {
    title: 'EcoBin',
    description: 'EcoBin is a smart e-waste pickup and recycling management system built with the MERN stack. It connects users, pickup agents, and administrators through a clean UI. Users can schedule e-waste pickups, track requests, and receive updates. Admins oversee user data, feedback (with sentiment analysis), and manage agent logistics. The platform emphasizes environmental awareness through educational content and interactive features.',
    image: '/EcoBin.png',
    tags: ['React', 'Express', 'Node.js', 'MongoDB', 'Chart.js', 'Sentiment Analysis', 'Tailwind CSS', 'GSAP'],
    code: 'https://github.com/santheep7/Ecobin.git',
    Demo:'https://ecobin-xi.vercel.app/'
  }
];

const Projects = () => {
  const projectsRef = useRef();

  useEffect(() => {
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
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);


  return (
    <Box id="projects" sx={{ py: 8 ,fontFamily:'sans-serif'}} ref={projectsRef}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
          Some of my recent work
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card className="project-card" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
  <CardMedia
    component="img"
    height="100"
    image={project.image}
    alt={project.title}
  />
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography gutterBottom variant="h5" component="h3">
      {project.title}
    </Typography>
    <Typography variant="body2" color="text.secondary" paragraph>
      {project.description}
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
      {project.tags.map((tag, i) => (
        <Box
          key={i}
          sx={{
            px: 1.5,
            py: 0.5,
            color: '#fff',
            fontSize: '0.75rem',
            fontWeight: 500,
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #ff9966, #ff5e62, #ff9966)',
            backgroundSize: '300% 300%',
            animation: 'orangeGlow 5s ease infinite',
            boxShadow: '0 0 6px rgba(255, 94, 98, 0.35), 0 0 10px rgba(255, 153, 102, 0.3)',
            backdropFilter: 'blur(3px)',
            '@keyframes orangeGlow': {
              '0%': { backgroundPosition: '0% 50%' },
              '50%': { backgroundPosition: '100% 50%' },
              '100%': { backgroundPosition: '0% 50%' }
            }
          }}
        >
          {tag}
        </Box>
      ))}
    </Box>
  </CardContent>

  {(project.code || project.Demo) && (
    <Box sx={{ p: 2, display: 'flex', gap: 2 }}>
      {project.code && (
        <Button
          variant="contained"
          size="small"
          href={project.code}
          target="_blank"
          sx={{
            backgroundImage: 'linear-gradient(to right, #00c6ff, #0072ff)',
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundImage: 'linear-gradient(to right, #0072ff, #00c6ff)',
            }
          }}
        >
          View Code
        </Button>
      )}

      {project.Demo && (
        <Button
          variant="contained"
          size="small"
          href={project.Demo}
          target="_blank"
          sx={{
            backgroundImage: 'linear-gradient(to right, #ff512f, #dd2476)',
            color: '#fff',
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundImage: 'linear-gradient(to right, #dd2476, #ff512f)',
            }
          }}
        >
          Live Demo
        </Button>
      )}
    </Box>
  )}
</Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;