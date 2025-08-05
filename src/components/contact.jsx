import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Container, Typography, Box, TextField, Button, Grid, Alert } from '@mui/material';
import { FiSend } from 'react-icons/fi';
import emailjs from 'emailjs-com';

const Contact = () => {
  const contactRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: 'Portfolio Contact Form',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
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
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

   emailjs.send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  formData,
  process.env.REACT_APP_EMAILJS_USER_ID
)

      .then(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', title: 'Portfolio Contact Form' });
      })
      .catch(() => {
        setSubmitStatus('error');
      });
  };

  return (
    <Box id="contact" sx={{ py: 8, bgcolor: 'background.default' }} ref={contactRef}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 6 }}>
          Have a project in mind or want to connect? Feel free to reach out!
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} className="contact-item">
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} md={6} className="contact-item">
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} className="contact-item">
              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                multiline
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} className="contact-item">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<FiSend />}
                disabled={submitStatus === 'sending'}
                sx={{ minWidth: '200px' }}
              >
                {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </Grid>
            {submitStatus === 'success' && (
              <Grid item xs={12}>
                <Alert severity="success" onClose={() => setSubmitStatus(null)}>
                  Message sent successfully! I'll get back to you soon.
                </Alert>
              </Grid>
            )}
            {submitStatus === 'error' && (
              <Grid item xs={12}>
                <Alert severity="error" onClose={() => setSubmitStatus(null)}>
                  Something went wrong. Please try again later.
                </Alert>
              </Grid>
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;