'use client';

import { IconButton, Box } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 60,
        right: 40,
        zIndex: 9999,
      }}
    >
      <IconButton
        onClick={toggleTheme}
        sx={{
          width: 30,
          height: 30,
          background: theme === 'dark' 
            ? 'linear-gradient(135deg, #4f46e5, #7c3aed)'
            : 'linear-gradient(135deg, #fbbf24, #f59e0b)',
          backdropFilter: 'blur(20px)',
          border: theme === 'dark' 
            ? '2px solid rgba(255, 255, 255, 0.2)'
            : '2px solid rgba(0, 0, 0, 0.2)',
          color: '#ffffff',
          boxShadow: theme === 'dark'
            ? '0 8px 32px rgba(79, 70, 229, 0.4)'
            : '0 8px 32px rgba(251, 191, 36, 0.4)',
          transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
          '&:hover': {
            transform: 'scale(1.15) rotate(15deg)',
            boxShadow: theme === 'dark' 
              ? '0 12px 40px rgba(79, 70, 229, 0.6)'
              : '0 12px 40px rgba(251, 191, 36, 0.6)',
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #6366f1, #8b5cf6)'
              : 'linear-gradient(135deg, #fcd34d, #fbbf24)'
          }
        }}
      >
        {theme === 'dark' ? (
          <LightMode sx={{ fontSize: 32 }} />
        ) : (
          <DarkMode sx={{ fontSize: 32 }} />
        )}
      </IconButton>
    </Box>
  );
};

export default ThemeToggle;