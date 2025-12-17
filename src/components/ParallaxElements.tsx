'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const elements = containerRef.current?.querySelectorAll('.parallax-element');
      
      elements?.forEach((element, index) => {
        gsap.to(element, {
          yPercent: -50 * (index + 1),
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }
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
      {/* Floating geometric shapes */}
      <Box
        className="parallax-element"
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.3), rgba(238, 90, 36, 0.2))',
          borderRadius: '20px',
          transform: 'rotate(45deg)',
          animation: 'float 6s ease-in-out infinite',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 107, 107, 0.2)'
        }}
      />
      
      <Box
        className="parallax-element"
        sx={{
          position: 'absolute',
          top: '60%',
          left: '5%',
          width: '80px',
          height: '80px',
          background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.2))',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(102, 126, 234, 0.2)'
        }}
      />
      
      <Box
        className="parallax-element"
        sx={{
          position: 'absolute',
          top: '30%',
          left: '80%',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.3), rgba(255, 165, 0, 0.2))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          animation: 'float 10s ease-in-out infinite',
          backdropFilter: 'blur(10px)'
        }}
      />
      
      <Box
        className="parallax-element"
        sx={{
          position: 'absolute',
          top: '80%',
          right: '20%',
          width: '120px',
          height: '120px',
          background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(238, 90, 36, 0.1))',
          borderRadius: '30px',
          transform: 'rotate(30deg)',
          animation: 'float 7s ease-in-out infinite',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 107, 107, 0.15)'
        }}
      />
      
      {/* Additional smaller elements */}
      <Box
        className="parallax-element"
        sx={{
          position: 'absolute',
          top: '25%',
          left: '15%',
          width: '40px',
          height: '40px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          animation: 'float 12s ease-in-out infinite',
          backdropFilter: 'blur(5px)'
        }}
      />
      
      <Box
        className="parallax-element"
        sx={{
          position: 'absolute',
          top: '70%',
          right: '60%',
          width: '30px',
          height: '30px',
          background: 'rgba(255, 215, 0, 0.2)',
          transform: 'rotate(45deg)',
          animation: 'float 9s ease-in-out infinite reverse'
        }}
      />
    </Box>
  );
}