import * as React from 'react';

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('system');
  const [resolvedTheme, setResolvedTheme] = React.useState('light');

  React.useEffect(() => {
    // Get initial theme from localStorage or default to system
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
  }, []);

  React.useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setResolvedTheme(systemTheme);
      root.setAttribute('data-theme', systemTheme);
    } else {
      setResolvedTheme(theme);
      root.setAttribute('data-theme', theme);
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        setResolvedTheme(systemTheme);
        const root = window.document.documentElement;
        root.setAttribute('data-theme', systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'light') return 'dark';
      if (prev === 'dark') return 'system';
      return 'light';
    });
  };

  return React.createElement(ThemeContext.Provider, {
    value: { theme, resolvedTheme, toggleTheme }
  }, children);
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
