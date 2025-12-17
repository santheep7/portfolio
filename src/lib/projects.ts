export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'BikeBuddie',
    description: 'A bike rental platform built with MERN stack as a learning project. Features include user authentication, bike listing, booking system, and smooth animations using GSAP for enhanced user experience.',
    image: '/BikeBuddie.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GSAP'],
    githubLink: 'https://github.com/santheep7/BikeBuddie',
    liveLink: 'https://bike-buddie.vercel.app/',
    category: 'MERN Stack'
  },
  {
    id: 2,
    title: 'EcoBin',
    description: 'A waste management awareness web application built with MERN stack. Features include educational content, waste tracking, tips for sustainable living, and interactive animations powered by GSAP.',
    image: '/EcoBin.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GSAP'],
    githubLink: 'https://github.com/santheep7/Ecobin',
    liveLink: 'https://ecobin-xi.vercel.app/',
    category: 'MERN Stack'
  },
  {
    id: 3,
    title: 'ShopinGo',
    description: 'An e-commerce web application built with MERN stack as a learning project. Includes product catalog, shopping cart, user authentication, and engaging animations using GSAP for smooth transitions.',
    image: '/ShopinGo.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GSAP'],
    githubLink: 'https://github.com/santheep7/ShopinGo',
    liveLink: 'https://shopin-go.vercel.app/',
    category: 'MERN Stack'
  }
];

export const getTechColor = (tech: string): { bg: string; color: string; border: string } => {
  const colors = {
    'GSAP': { bg: 'rgba(255, 193, 7, 0.15)', color: '#ff8f00', border: 'rgba(255, 143, 0, 0.3)' },
    'React': { bg: 'rgba(97, 218, 251, 0.15)', color: '#61dafb', border: 'rgba(97, 218, 251, 0.3)' },
    'Node.js': { bg: 'rgba(51, 153, 51, 0.15)', color: '#339933', border: 'rgba(51, 153, 51, 0.3)' },
    'MongoDB': { bg: 'rgba(71, 162, 72, 0.15)', color: '#47a248', border: 'rgba(71, 162, 72, 0.3)' },
    'Express.js': { bg: 'rgba(255, 107, 107, 0.15)', color: '#ff6b6b', border: 'rgba(255, 107, 107, 0.3)' }
  };
  
  return colors[tech as keyof typeof colors] || { bg: 'rgba(255, 107, 107, 0.15)', color: '#ff6b6b', border: 'rgba(255, 107, 107, 0.3)' };
};