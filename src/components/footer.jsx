import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Box, Typography, IconButton, Link } from '@mui/material';
import { FaGithub, FaLinkedin,FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const footerRef = useRef();

  useEffect(() => {
  gsap.fromTo(
    footerRef.current,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%',
        toggleActions: 'play none none none'
      }
    }
  );
}, []);


  return (
    <Box
      ref={footerRef}
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'background.paper',
        textAlign: 'center',
        fontFamily:'sans-serif'
      }}
    >
      <Box sx={{ mb: 3 }}>
        <IconButton
          href="https:// github.com/santheep7"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          sx={{ mx: 1 }}
        >
          <FaGithub />
        </IconButton>
        <IconButton
          href="https://linkedin.com/in/santheep-krishna-95a573276"
          
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          sx={{ mx: 1 }}
        >
          <FaLinkedin />
        </IconButton>
        <IconButton
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          sx={{ mx: 1 }}
        >
          <FaInstagram />
        </IconButton>
        <IconButton
          href="mailto:santheepkrishna09@gmail.com"
          aria-label="Email"
          sx={{ mx: 1 }}
        >
          <FaEnvelope />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Santheep krishna V G. All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Built with React, Material-UI,,Tailwind CSS and GSAP
      </Typography>
      <Typography variant="body2" sx={{ mt: 2 }}>
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        {' | '}
        <Link href="#" color="inherit" underline="hover">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;