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
    description: 'A comprehensive bike rental platform built with MERN stack as a learning project. Features include user authentication with JWT, bike listing with search filters, booking system with payment integration, real-time notifications, and smooth animations using GSAP for enhanced user experience.',
    image: '/BikeBuddie.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'GSAP', 'Material-UI', 'Tailwind CSS', 'Mongoose', 'Bcrypt', 'Axios', 'React Router'],
    githubLink: 'https://github.com/santheep7/BikeBuddie',
    liveLink: 'https://bike-buddie.vercel.app/',
    category: 'MERN Stack'
  },
  {
    id: 2,
    title: 'EcoBin',
    description: 'A waste management awareness web application built with MERN stack. Features include educational content, waste tracking dashboard, tips for sustainable living, user progress tracking, community features, and interactive animations powered by GSAP.',
    image: '/EcoBin.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'GSAP', 'Bootstrap', 'Mongoose', 'Bcrypt', 'Multer', 'Cloudinary', 'React Hooks'],
    githubLink: 'https://github.com/santheep7/Ecobin',
    liveLink: 'https://ecobin-xi.vercel.app/',
    category: 'MERN Stack'
  },
  {
    id: 3,
    title: 'ShopinGo',
    description: 'An e-commerce web application built with MERN stack as a learning project. Includes product catalog with categories, shopping cart with local storage, user authentication, order management, admin panel, payment gateway integration, and engaging animations using GSAP for smooth transitions.',
    image: '/ShopinGo.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'GSAP', 'Material-UI', 'Redux', 'Mongoose', 'Bcrypt', 'Stripe', 'Nodemailer'],
    githubLink: 'https://github.com/santheep7/ShopinGo',
    liveLink: 'https://shopin-go.vercel.app/',
    category: 'MERN Stack'
  }
];

export const getTechColor = (tech: string): { bg: string; color: string; border: string } => {
  const colors = {
    // Core MERN Stack
    'MongoDB': { bg: 'rgba(71, 162, 72, 0.15)', color: '#47a248', border: 'rgba(71, 162, 72, 0.3)' },
    'Express.js': { bg: 'rgba(255, 107, 107, 0.15)', color: '#ff6b6b', border: 'rgba(255, 107, 107, 0.3)' },
    'React': { bg: 'rgba(97, 218, 251, 0.15)', color: '#61dafb', border: 'rgba(97, 218, 251, 0.3)' },
    'Node.js': { bg: 'rgba(51, 153, 51, 0.15)', color: '#339933', border: 'rgba(51, 153, 51, 0.3)' },
    
    // Authentication & Security
    'JWT': { bg: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24', border: 'rgba(251, 191, 36, 0.3)' },
    'Bcrypt': { bg: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: 'rgba(239, 68, 68, 0.3)' },
    
    // Animation & UI
    'GSAP': { bg: 'rgba(255, 193, 7, 0.15)', color: '#ff8f00', border: 'rgba(255, 143, 0, 0.3)' },
    'Material-UI': { bg: 'rgba(33, 150, 243, 0.15)', color: '#2196f3', border: 'rgba(33, 150, 243, 0.3)' },
    'Tailwind CSS': { bg: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4', border: 'rgba(6, 182, 212, 0.3)' },
    'Bootstrap': { bg: 'rgba(111, 66, 193, 0.15)', color: '#6f42c1', border: 'rgba(111, 66, 193, 0.3)' },
    
    // Database & Backend
    'Mongoose': { bg: 'rgba(139, 69, 19, 0.15)', color: '#8b4513', border: 'rgba(139, 69, 19, 0.3)' },
    'Multer': { bg: 'rgba(255, 165, 0, 0.15)', color: '#ffa500', border: 'rgba(255, 165, 0, 0.3)' },
    'Cloudinary': { bg: 'rgba(52, 152, 219, 0.15)', color: '#3498db', border: 'rgba(52, 152, 219, 0.3)' },
    'Nodemailer': { bg: 'rgba(46, 204, 113, 0.15)', color: '#2ecc71', border: 'rgba(46, 204, 113, 0.3)' },
    
    // Frontend Libraries
    'Axios': { bg: 'rgba(102, 51, 153, 0.15)', color: '#663399', border: 'rgba(102, 51, 153, 0.3)' },
    'React Router': { bg: 'rgba(202, 52, 51, 0.15)', color: '#ca3433', border: 'rgba(202, 52, 51, 0.3)' },
    'React Hooks': { bg: 'rgba(97, 218, 251, 0.15)', color: '#61dafb', border: 'rgba(97, 218, 251, 0.3)' },
    'Redux': { bg: 'rgba(118, 74, 188, 0.15)', color: '#764abc', border: 'rgba(118, 74, 188, 0.3)' },
    
    // Payment & Services
    'Stripe': { bg: 'rgba(99, 91, 255, 0.15)', color: '#635bff', border: 'rgba(99, 91, 255, 0.3)' },
    'Prisma': { bg: 'rgba(45, 212, 191, 0.15)', color: '#2dd4bf', border: 'rgba(45, 212, 191, 0.3)' }
  };
  
  return colors[tech as keyof typeof colors] || { bg: 'rgba(79, 70, 229, 0.15)', color: '#4f46e5', border: 'rgba(79, 70, 229, 0.3)' };
};