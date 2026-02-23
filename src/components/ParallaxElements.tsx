'use client';

import { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && isMounted) {
      // Tech Sun Rising Effect - comes from bottom (optimized)
      gsap.fromTo('.tech-sun',
        { 
          y: 300,
          opacity: 0,
          scale: 0.5
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.tech-sun',
            start: 'top 90%',
            end: 'top 30%',
            scrub: 1,
            markers: false
          }
        }
      );

      // Code blocks sliding from left - optimized
      const leftElements = gsap.utils.toArray('.slide-from-left') as HTMLElement[];
      leftElements.forEach((element) => {
        gsap.fromTo(element,
          { 
            x: -400,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
              markers: false
            }
          }
        );
      });

      // Terminal sliding from right - optimized
      const rightElements = gsap.utils.toArray('.slide-from-right') as HTMLElement[];
      rightElements.forEach((element) => {
        gsap.fromTo(element,
          { 
            x: 400,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
              markers: false
            }
          }
        );
      });

      // Floating elements with rotation - simplified
      gsap.to('.float-rotate', {
        y: -20,
        rotation: 180,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isMounted) {
    return null;
  }

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
      {/* Tech Sun - Rising from bottom */}
      <Box
        className="tech-sun"
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, rgba(0, 212, 255, 0.1) 40%, transparent 70%)',
          borderRadius: '50%',
          border: '3px solid rgba(0, 212, 255, 0.4)',
          boxShadow: '0 0 60px rgba(0, 212, 255, 0.4), inset 0 0 40px rgba(0, 212, 255, 0.2)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120px',
            height: '120px',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
            borderRadius: '50%',
            border: '2px solid rgba(0, 212, 255, 0.5)'
          }
        }}
      />

      {/* Code Block - Slides from Left */}
      <Box
        className="slide-from-left"
        sx={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '220px',
          height: '160px',
          background: 'rgba(0, 212, 255, 0.08)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '12px',
          padding: '15px',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#00d4ff',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '30px',
            background: 'rgba(0, 212, 255, 0.15)',
            borderBottom: '1px solid rgba(0, 212, 255, 0.3)'
          }
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 1, mt: 3.5 }}>
          <Box sx={{ opacity: 0.8, mb: 0.5 }}>{'const portfolio = {'}</Box>
          <Box sx={{ opacity: 0.7, pl: 2, mb: 0.5 }}>{'name: "Developer",'}</Box>
          <Box sx={{ opacity: 0.7, pl: 2, mb: 0.5 }}>{'skills: ["React"],'}</Box>
          <Box sx={{ opacity: 0.8 }}>{'};'}</Box>
        </Box>
      </Box>

      {/* Terminal - Slides from Right */}
      <Box
        className="slide-from-right"
        sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '240px',
          background: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 212, 255, 0.4)',
          borderRadius: '10px',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}
      >
        <Box sx={{ 
          height: '32px', 
          background: 'rgba(0, 212, 255, 0.12)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          px: 1.5
        }}>
          <Box sx={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ff5f56' }} />
          <Box sx={{ width: '11px', height: '11px', borderRadius: '50%', background: '#ffbd2e' }} />
          <Box sx={{ width: '11px', height: '11px', borderRadius: '50%', background: '#27c93f' }} />
          <Box sx={{ ml: 1, fontSize: '10px', color: '#00d4ff', opacity: 0.7 }}>terminal</Box>
        </Box>
        <Box sx={{ 
          p: 2, 
          fontFamily: 'monospace', 
          fontSize: '11px', 
          color: '#00d4ff',
          lineHeight: 1.8
        }}>
          <Box sx={{ opacity: 0.9 }}>$ npm run build</Box>
          <Box sx={{ opacity: 0.7, color: '#27c93f' }}>&gt; Building...</Box>
          <Box sx={{ opacity: 0.7, color: '#27c93f' }}>&gt; ✓ Compiled</Box>
          <Box sx={{ opacity: 0.6, color: '#27c93f' }}>&gt; Ready!</Box>
        </Box>
      </Box>

      {/* Floating Hexagon with Rotation */}
      <Box
        className="float-rotate"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '8%',
          width: '100px',
          height: '115px',
          background: 'linear-gradient(135deg, rgba(123, 44, 191, 0.15), rgba(199, 125, 255, 0.08))',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '2px solid rgba(123, 44, 191, 0.4)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(123, 44, 191, 0.2)'
        }}
      />

      {/* Circuit Pattern - Slides from Left */}
      <Box
        className="slide-from-left"
        sx={{
          position: 'absolute',
          top: '60%',
          left: '10%',
          width: '180px',
          height: '180px',
          background: `
            radial-gradient(circle at 30% 30%, rgba(0, 212, 255, 0.4) 3px, transparent 3px),
            radial-gradient(circle at 70% 70%, rgba(199, 125, 255, 0.4) 3px, transparent 3px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px),
            linear-gradient(rgba(199, 125, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '12px',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)'
        }}
      />

      {/* Binary Code - Slides from Right */}
      <Box
        className="slide-from-right"
        sx={{
          position: 'absolute',
          top: '65%',
          right: '8%',
          width: '160px',
          padding: '15px',
          background: 'rgba(123, 44, 191, 0.1)',
          border: '1px solid rgba(123, 44, 191, 0.4)',
          borderRadius: '10px',
          fontFamily: 'monospace',
          fontSize: '10px',
          color: '#c77dff',
          lineHeight: 1.6,
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(123, 44, 191, 0.15)'
        }}
      >
        <Box sx={{ opacity: 0.8 }}>01001000 01101001</Box>
        <Box sx={{ opacity: 0.7 }}>01010100 01100101</Box>
        <Box sx={{ opacity: 0.6 }}>01100011 01101000</Box>
        <Box sx={{ opacity: 0.5 }}>01001110 01100101</Box>
        <Box sx={{ opacity: 0.4 }}>01111000 01110100</Box>
      </Box>

      {/* Glowing Circle - Floating */}
      <Box
        className="float-rotate"
        sx={{
          position: 'absolute',
          top: '35%',
          right: '15%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(199, 125, 255, 0.2) 0%, transparent 70%)',
          border: '2px solid rgba(199, 125, 255, 0.5)',
          borderRadius: '50%',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 0 40px rgba(199, 125, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={{
          width: '70px',
          height: '70px',
          background: 'rgba(199, 125, 255, 0.15)',
          borderRadius: '50%',
          border: '1px solid rgba(199, 125, 255, 0.6)'
        }} />
      </Box>

      {/* Developer Icon - Slides from Left */}
      <Box
        className="slide-from-left"
        sx={{
          position: 'absolute',
          top: '80%',
          left: '20%',
          width: '90px',
          height: '90px',
          border: '2px solid rgba(0, 212, 255, 0.5)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 212, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          fontSize: '36px',
          color: '#00d4ff',
          fontFamily: 'monospace',
          fontWeight: 'bold',
          boxShadow: '0 8px 32px rgba(0, 212, 255, 0.2)'
        }}
      >
        {'</>'}
      </Box>
    </Box>
  );
}
