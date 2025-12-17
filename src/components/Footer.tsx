'use client';

import { Container, Typography, Box, Button, Divider } from '@mui/material';
import { 
  GitHub, 
  LinkedIn, 
  Email, 
  Phone, 
  LocationOn,
  Favorite,
  KeyboardArrowUp
} from '@mui/icons-material';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <GitHub />,
      label: 'GitHub',
      href: 'https://github.com/santheep7',
      color: '#333'
    },
    {
      icon: <LinkedIn />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/santheep-krishna-95a573276/',
      color: '#0077B5'
    },
    {
      icon: <Email />,
      label: 'Email',
      href: 'mailto:santheepkrishna09@gmail.com',
      color: '#EA4335'
    }
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 150,
          height: 150,
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <Box sx={{ py: 6 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
            gap: 4 
          }}>
            {/* About Section */}
            <Box>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 800, 
                  mb: 2,
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Santheep Krishna V G
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8, lineHeight: 1.6 }}>
                Full Stack MERN Developer passionate about creating innovative web solutions. 
                Always eager to learn new technologies and take on challenging projects.
              </Typography>
              
              {/* Contact Info */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn sx={{ fontSize: 16, mr: 1, opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Kerala, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Phone sx={{ fontSize: 16, mr: 1, opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    +91 8075738744
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ fontSize: 16, mr: 1, opacity: 0.7 }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    santheepkrishna@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {quickLinks.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'rgba(255,255,255,0.8)',
                      textTransform: 'none',
                      p: 1,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        transform: 'translateX(8px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Social Links & Newsletter */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                Connect With Me
              </Typography>
              
              {/* Social Media Links */}
              <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      minWidth: 'auto',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: social.color,
                        transform: 'translateY(-4px) scale(1.1)',
                        boxShadow: `0 8px 25px ${social.color}40`
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {social.icon}
                  </Button>
                ))}
              </Box>

              {/* Back to Top Button */}
              <Button
                onClick={scrollToTop}
                startIcon={<KeyboardArrowUp />}
                sx={{
                  backgroundColor: 'rgba(102, 126, 234, 0.2)',
                  color: 'white',
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    backgroundColor: '#667eea',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Back to Top
              </Button>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Bottom Footer */}
        <Box 
          sx={{ 
            py: 3, 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Santheep Krishna V G. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              Made with
            </Typography>
            <Favorite sx={{ color: '#ff4757', fontSize: 16 }} />
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              using Next.js & Material-UI
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;