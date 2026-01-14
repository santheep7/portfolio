'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

export default function ParallaxElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Large Grid Background - Slowest */}
      <Box
        data-parallax="0.1"
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '200%',
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5
        }}
      />

      {/* Floating Code Block 1 */}
      <Box
        data-parallax="0.3"
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '150px',
          background: 'rgba(0, 212, 255, 0.08)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '12px',
          padding: '15px',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#00d4ff',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '25px',
            background: 'rgba(0, 212, 255, 0.1)',
            borderBottom: '1px solid rgba(0, 212, 255, 0.2)'
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, mt: 3 }}>
          <Box sx={{ opacity: 0.7 }}>{'function Portfolio() {'}</Box>
          <Box sx={{ opacity: 0.6, pl: 2 }}>{'return <App />;'}</Box>
          <Box sx={{ opacity: 0.7 }}>{'}'}</Box>
        </Box>
      </Box>

      {/* Hexagon Shape */}
      <Box
        data-parallax="0.5"
        sx={{
          position: 'absolute',
          top: '30%',
          left: '5%',
          width: '120px',
          height: '138px',
          background: 'linear-gradient(135deg, rgba(123, 44, 191, 0.12), rgba(199, 125, 255, 0.08))',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '2px solid rgba(123, 44, 191, 0.3)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(123, 44, 191, 0.15)'
        }}
      />

      {/* Terminal Window */}
      <Box
        data-parallax="0.4"
        sx={{
          position: 'absolute',
          top: '50%',
          right: '15%',
          width: '220px',
          background: 'rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '8px',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Terminal Header */}
        <Box sx={{ 
          height: '30px', 
          background: 'rgba(0, 212, 255, 0.1)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          px: 1.5
        }}>
          <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
          <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
          <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
        </Box>
        {/* Terminal Content */}
        <Box sx={{ 
          p: 2, 
          fontFamily: 'monospace', 
          fontSize: '11px', 
          color: '#00d4ff',
          lineHeight: 1.6
        }}>
          <Box sx={{ opacity: 0.8 }}>$ npm run dev</Box>
          <Box sx={{ opacity: 0.6, color: '#27c93f' }}>&gt; Starting server...</Box>
          <Box sx={{ opacity: 0.6, color: '#27c93f' }}>&gt; Ready on port 3000</Box>
        </Box>
      </Box>

      {/* Circuit Pattern */}
      <Box
        data-parallax="0.25"
        sx={{
          position: 'absolute',
          top: '70%',
          left: '15%',
          width: '180px',
          height: '180px',
          background: `
            radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.3) 3px, transparent 3px),
            radial-gradient(circle at 70% 70%, rgba(199, 125, 255, 0.3) 3px, transparent 3px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(199, 125, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          borderRadius: '12px',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(0, 212, 255, 0.1)'
        }}
      />

      {/* Glowing Circle */}
      <Box
        data-parallax="0.6"
        sx={{
          position: 'absolute',
          top: '20%',
          left: '80%',
          width: '140px',
          height: '140px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)',
          border: '2px solid rgba(0, 212, 255, 0.4)',
          borderRadius: '50%',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{
          width: '80px',
          height: '80px',
          background: 'rgba(0, 212, 255, 0.15)',
          borderRadius: '50%',
          border: '1px solid rgba(0, 212, 255, 0.5)'
        }} />
      </Box>

      {/* Binary Code Block */}
      <Box
        data-parallax="0.35"
        sx={{
          position: 'absolute',
          top: '60%',
          right: '5%',
          width: '150px',
          padding: '12px',
          background: 'rgba(123, 44, 191, 0.08)',
          border: '1px solid rgba(123, 44, 191, 0.3)',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '9px',
          color: '#c77dff',
          lineHeight: 1.5,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(123, 44, 191, 0.1)'
        }}
      >
        <Box sx={{ opacity: 0.7 }}>01001000 01101001</Box>
        <Box sx={{ opacity: 0.6 }}>01010100 01100101</Box>
        <Box sx={{ opacity: 0.5 }}>01100011 01101000</Box>
        <Box sx={{ opacity: 0.4 }}>01001110 01100101</Box>
      </Box>

      {/* Code Brackets */}
      <Box
        data-parallax="0.45"
        sx={{
          position: 'absolute',
          top: '85%',
          left: '25%',
          width: '100px',
          height: '100px',
          border: '2px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '10px',
          background: 'rgba(0, 212, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '25px',
            height: '25px',
            border: '2px solid rgba(0, 212, 255, 0.6)'
          },
          '&::before': {
            top: -2,
            left: -2,
            borderRight: 'none',
            borderBottom: 'none'
          },
          '&::after': {
            bottom: -2,
            right: -2,
            borderLeft: 'none',
            borderTop: 'none'
          }
        }}
      />

      {/* Small Dots Pattern */}
      <Box
        data-parallax="0.55"
        sx={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          width: '120px',
          height: '120px',
          background: `
            radial-gradient(circle, rgba(199, 125, 255, 0.4) 2px, transparent 2px)
          `,
          backgroundSize: '20px 20px',
          opacity: 0.5
        }}
      />

      {/* Developer Icon */}
      <Box
        data-parallax="0.2"
        sx={{
          position: 'absolute',
          top: '75%',
          right: '35%',
          width: '80px',
          height: '80px',
          border: '2px solid rgba(199, 125, 255, 0.4)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(199, 125, 255, 0.08)',
          backdropFilter: 'blur(10px)',
          fontSize: '32px',
          color: '#c77dff',
          fontFamily: 'monospace',
          boxShadow: '0 8px 32px rgba(199, 125, 255, 0.15)'
        }}
      >
        {'</>'}
      </Box>
    </Box>
  );
}