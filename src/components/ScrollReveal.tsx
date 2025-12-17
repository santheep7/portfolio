'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 1 
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && elementRef.current) {
      const element = elementRef.current;
      
      // Set initial state based on direction
      const initialState: any = { opacity: 0 };
      const finalState: any = { opacity: 1 };
      
      switch (direction) {
        case 'up':
          initialState.y = 50;
          finalState.y = 0;
          break;
        case 'down':
          initialState.y = -50;
          finalState.y = 0;
          break;
        case 'left':
          initialState.x = 50;
          finalState.x = 0;
          break;
        case 'right':
          initialState.x = -50;
          finalState.x = 0;
          break;
        case 'fade':
          // Only opacity animation
          break;
      }

      gsap.set(element, initialState);

      gsap.to(element, {
        ...finalState,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }
  }, [direction, delay, duration]);

  return (
    <Box ref={elementRef}>
      {children}
    </Box>
  );
}