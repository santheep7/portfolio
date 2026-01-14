'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Container, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Chip,
  Alert,
  Snackbar
} from '@mui/material';
import { 
  Email, 
  Phone, 
  LocationOn, 
  LinkedIn, 
  GitHub, 
  Send,
  Person,
  Message
} from '@mui/icons-material';
import emailjs from '@emailjs/browser';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.fromTo(
        '.contact-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contactRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Initialize EmailJS with environment variables
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Santheep Krishna V G'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setNotification({
        open: true,
        message: 'Message sent successfully! I\'ll get back to you soon.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setNotification({
        open: true,
        message: 'Failed to send message. Please try again or contact me directly.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'santheepkrishna09@gmail.com',
      link: 'mailto:santheepkrishna09@gmail.com'
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+91 8075738744',
      link: 'tel:+918075738744'
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'Kerala, India',
      link: null
    },
    {
      icon: <LinkedIn />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/santheepkrishna',
      link: 'https://www.linkedin.com/in/santheep-krishna-95a573276/'
    }
  ];

  return (
    <Box 
      component="section"
      id="contact" 
      sx={{ 
        py: 10, 
        background: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)',
        color: 'white',
        position: 'relative'
      }} 
      ref={contactRef}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Chip 
            label="Get In Touch" 
            sx={{ 
              mb: 2, 
              backgroundColor: 'rgba(0, 212, 255, 0.15)', 
              color: '#00d4ff',
              fontWeight: 600,
              px: 2,
              border: '1px solid rgba(0, 212, 255, 0.3)'
            }} 
          />
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800,
              mb: 2,
              background: 'linear-gradient(90deg, #00d4ff, #c77dff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Let&apos;s Work Together
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', mx: 'auto' }}>
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s discuss how we can bring your ideas to life.
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, 
          gap: 6 
        }}>
          {/* Contact Information */}
          <Box className="contact-item">
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: 'white' }}>
              Contact Information
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 2,
                    background: 'rgba(0, 212, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'rgba(0, 212, 255, 0.1)',
                      transform: 'translateX(8px)',
                      borderColor: 'rgba(0, 212, 255, 0.4)'
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ color: 'white', mr: 3 }}>
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 0.5 }}>
                          {info.title}
                        </Typography>
                        {info.link ? (
                          <Typography 
                            component="a" 
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            sx={{ 
                              color: 'white', 
                              textDecoration: 'none',
                              '&:hover': { textDecoration: 'underline' }
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography sx={{ color: 'white' }}>
                            {info.value}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            {/* Social Links */}
            <Box>
              <Typography variant="h6" sx={{ mb: 2, color: 'white' }}>
                Follow Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  startIcon={<GitHub />}
                  href="https://github.com/santheep7"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#00d4ff',
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                    '&:hover': {
                      borderColor: '#00d4ff',
                      backgroundColor: 'rgba(0, 212, 255, 0.1)'
                    }
                  }}
                  variant="outlined"
                >
                  GitHub
                </Button>
                <Button
                  startIcon={<LinkedIn />}
                  href="https://www.linkedin.com/in/santheep-krishna-95a573276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#c77dff',
                    borderColor: 'rgba(123, 44, 191, 0.3)',
                    '&:hover': {
                      borderColor: '#c77dff',
                      backgroundColor: 'rgba(123, 44, 191, 0.1)'
                    }
                  }}
                  variant="outlined"
                >
                  LinkedIn
                </Button>
              </Box>
            </Box>
          </Box>

          {/* Contact Form */}
          <Box>
            <Card 
              className="contact-item"
              sx={{
                background: 'rgba(0, 212, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '16px'
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
                  Send Me a Message
                </Typography>
                
                <Box component="form" ref={formRef} onSubmit={handleSubmit}>
                  {/* Name and Email Row */}
                  <Box sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                    gap: 3,
                    mb: 3
                  }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      slotProps={{
                        input: {
                          startAdornment: <Person sx={{ color: 'rgba(255,255,255,0.7)', mr: 1 }} />
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)'
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white'
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)'
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      slotProps={{
                        input: {
                          startAdornment: <Email sx={{ color: 'rgba(255,255,255,0.7)', mr: 1 }} />
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)'
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white'
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)'
                        }
                      }}
                    />
                  </Box>

                  {/* Subject */}
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)'
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white'
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)'
                        }
                      }}
                    />
                  </Box>

                  {/* Message */}
                  <Box sx={{ mb: 3 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      slotProps={{
                        input: {
                          startAdornment: <Message sx={{ color: 'rgba(255,255,255,0.7)', mr: 1, alignSelf: 'flex-start', mt: 1 }} />
                        }
                      }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          color: 'white',
                          '& fieldset': {
                            borderColor: 'rgba(255,255,255,0.3)'
                          },
                          '&:hover fieldset': {
                            borderColor: 'rgba(255,255,255,0.5)'
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white'
                          }
                        },
                        '& .MuiInputLabel-root': {
                          color: 'rgba(255,255,255,0.7)'
                        }
                      }}
                    />
                  </Box>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    startIcon={<Send />}
                    disabled={loading}
                    sx={{
                      backgroundColor: '#00d4ff',
                      color: '#1a1a2e',
                      fontWeight: 'bold',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: '#00b8e6'
                      },
                      '&:disabled': {
                        backgroundColor: 'rgba(0, 212, 255, 0.3)'
                      }
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>

      {/* Notification Snackbar */}
      <Snackbar
        open={notification.open}
        autoHideDuration={6000}
        onClose={() => setNotification(prev => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setNotification(prev => ({ ...prev, open: false }))} 
          severity={notification.severity}
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;