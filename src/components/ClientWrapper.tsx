'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

// Dynamically import components to avoid SSR issues
const AnimatedBackground = dynamic(() => import('./AnimatedBackground'), { ssr: false });
const ParallaxElements = dynamic(() => import('./ParallaxElements'), { ssr: false });

interface ClientWrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <>
      <AnimatedBackground />
      <ParallaxElements />
      {children}
    </>
  );
}