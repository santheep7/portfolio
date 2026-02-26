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
        background: '#ffffff',
        color: '#1f1f2e',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 -2px 8px rgba(31, 31, 46, 0.1)'
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
                  color: '#1f1f2e'
                }}
              >
                Santheep Krishna V G
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#4a4a68', lineHeight: 1.6 }}>
                Full Stack MERN Developer passionate about creating innovative web solutions. 
                Always eager to learn new technologies and take on challenging projects.
              </Typography>
              
              {/* Contact Info */}
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn sx={{ fontSize: 16, mr: 1, color: '#4a4a68' }} />
                  <Typography variant="body2" sx={{ color: '#4a4a68' }}>
                    Kerala, India
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Phone sx={{ fontSize: 16, mr: 1, color: '#4a4a68' }} />
                  <Typography variant="body2" sx={{ color: '#4a4a68' }}>
                    +91 8075738744
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Email sx={{ fontSize: 16, mr: 1, color: '#4a4a68' }} />
                  <Typography variant="body2" sx={{ color: '#4a4a68' }}>
                    santheepkrishna@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1f1f2e' }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {quickLinks.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    sx={{
                      justifyContent: 'flex-start',
                      color: '#4a4a68',
                      textTransform: 'none',
                      p: 1,
                      borderRadius: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(159, 159, 255, 0.1)',
                        color: '#1f1f2e',
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
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1f1f2e' }}>
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
                      backgroundColor: '#ffffff',
                      color: '#1f1f2e',
                      boxShadow: '0 2px 8px rgba(31, 31, 46, 0.1)',
                      '&:hover': {
                        backgroundColor: '#ffffff',
                        transform: 'translateY(-4px) scale(1.1)',
                        boxShadow: '0 4px 12px rgba(31, 31, 46, 0.15)'
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
                  backgroundColor: '#9f9fff',
                  color: '#ffffff',
                  borderRadius: '25px',
                  px: 3,
                  py: 1,
                  '&:hover': {
                    backgroundColor: '#7f7fff',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(159, 159, 255, 0.3)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Back to Top
              </Button>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(31, 31, 46, 0.1)' }} />

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
          <Typography variant="body2" sx={{ color: '#4a4a68' }}>
            © {new Date().getFullYear()} Santheep Krishna V G. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ color: '#4a4a68' }}>
              Made with
            </Typography>
            <Favorite sx={{ color: '#ff4757', fontSize: 16 }} />
            <Typography variant="body2" sx={{ color: '#4a4a68' }}>
              using Next.js & Material-UI
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;