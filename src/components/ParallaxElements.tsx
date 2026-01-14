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
      // Parallax for floating shapes - different speeds
      gsap.to('.parallax-slow', {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          invalidateOnRefresh: true,
          scrub: 0
        }
      });

      gsap.to('.parallax-medium', {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          invalidateOnRefresh: true,
          scrub: 0
        }
      });

      gsap.to('.parallax-fast', {
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          invalidateOnRefresh: true,
          scrub: 0
        }
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
      {/* Grid Lines - Slow Parallax */}
      <Box
        className="parallax-slow"
        data-speed="0.1"
        sx={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: `
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          transform: 'rotate(45deg)',
          opacity: 0.3
        }}
      />

      {/* Code Snippet Effect - Medium Parallax */}
      <Box
        className="parallax-medium"
        data-speed="0.2"
        sx={{
          position: 'absolute',
          top: '15%',
          right: '15%',
          width: '180px',
          padding: '15px',
          background: 'rgba(0, 212, 255, 0.05)',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '10px',
          color: '#00d4ff',
          backdropFilter: 'blur(10px)',
          '&::before': {
            content: '"const dev = { \\A  name: \\"Portfolio\\", \\A  tech: [React, Next] \\A}"',
            whiteSpace: 'pre',
            opacity: 0.6
          }
        }}
      />

      {/* Hexagon Shape - Fast Parallax */}
      <Box
        className="parallax-fast"
        data-speed="0.3"
        sx={{
          position: 'absolute',
          top: '40%',
          left: '5%',
          width: '100px',
          height: '115px',
          background: 'linear-gradient(135deg, rgba(123, 44, 191, 0.15), rgba(199, 125, 255, 0.05))',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          border: '1px solid rgba(123, 44, 191, 0.3)',
          backdropFilter: 'blur(10px)'
        }}
      />

      {/* Circuit Pattern - Slow Parallax */}
      <Box
        className="parallax-slow"
        data-speed="0.15"
        sx={{
          position: 'absolute',
          top: '60%',
          right: '8%',
          width: '150px',
          height: '150px',
          background: `
            radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.2) 2px, transparent 2px),
            radial-gradient(circle at 80% 80%, rgba(199, 125, 255, 0.2) 2px, transparent 2px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(199, 125, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 30px 30px, 30px 30px',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          borderRadius: '10px',
          backdropFilter: 'blur(5px)'
        }}
      />

      {/* Binary Code Effect - Medium Parallax */}
      <Box
        className="parallax-medium"
        data-speed="0.25"
        sx={{
          position: 'absolute',
          top: '25%',
          left: '70%',
          width: '120px',
          padding: '10px',
          background: 'rgba(123, 44, 191, 0.05)',
          border: '1px solid rgba(123, 44, 191, 0.2)',
          borderRadius: '6px',
          fontFamily: 'monospace',
          fontSize: '8px',
          color: '#c77dff',
          lineHeight: 1.4,
          backdropFilter: 'blur(10px)',
          '&::before': {
            content: '"01001000 01101001\\A01010100 01100101\\A01100011 01101000"',
            whiteSpace: 'pre',
            opacity: 0.5
          }
        }}
      />

      {/* Glowing Circle - Fast Parallax */}
      <Box
        className="parallax-fast"
        data-speed="0.35"
        sx={{
          position: 'absolute',
          top: '70%',
          left: '20%',
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
          border: '2px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '50%',
          backdropFilter: 'blur(8px)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
            background: 'rgba(0, 212, 255, 0.1)',
            borderRadius: '50%',
            border: '1px solid rgba(0, 212, 255, 0.4)'
          }
        }}
      />

      {/* Tech Bracket - Slow Parallax */}
      <Box
        className="parallax-slow"
        data-speed="0.12"
        sx={{
          position: 'absolute',
          top: '80%',
          right: '25%',
          width: '80px',
          height: '80px',
          border: '2px solid rgba(199, 125, 255, 0.3)',
          borderRadius: '8px',
          background: 'rgba(199, 125, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '20px',
            height: '20px',
            border: '2px solid rgba(199, 125, 255, 0.5)'
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

      {/* Floating Terminal Window - Medium Parallax */}
      <Box
        className="parallax-medium"
        data-speed="0.22"
        sx={{
          position: 'absolute',
          top: '50%',
          right: '40%',
          width: '160px',
          background: 'rgba(0, 212, 255, 0.05)',
          border: '1px solid rgba(0, 212, 255, 0.25)',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
          overflow: 'hidden'
        }}
      >
        <Box sx={{ 
          height: '20px', 
          background: 'rgba(0, 212, 255, 0.1)',
          borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          px: 1
        }}>
          <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
          <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
          <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
        </Box>
        <Box sx={{ 
          p: 1, 
          fontFamily: 'monospace', 
          fontSize: '9px', 
          color: '#00d4ff',
          opacity: 0.6
        }}>
          $ npm run dev<br/>
          &gt; Ready on port 3000
        </Box>
      </Box>

      {/* Dotted Pattern - Fast Parallax */}
      <Box
        className="parallax-fast"
        data-speed="0.28"
        sx={{
          position: 'absolute',
          top: '35%',
          left: '85%',
          width: '100px',
          height: '100px',
          background: `
            radial-gradient(circle, rgba(0, 212, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px',
          opacity: 0.4
        }}
      />

      {/* Arrow Indicator - Slow Parallax */}
      <Box
        className="parallax-slow"
        data-speed="0.18"
        sx={{
          position: 'absolute',
          top: '90%',
          left: '50%',
          width: '60px',
          height: '60px',
          border: '2px solid rgba(0, 212, 255, 0.3)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 212, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          '&::before': {
            content: '"⟨/⟩"',
            fontSize: '24px',
            color: '#00d4ff',
            opacity: 0.6
          }
        }}
      />
    </Box>
  );
}