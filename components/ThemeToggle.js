import * as React from 'react';
import { useTheme } from '../lib/theme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return '☀️';
      case 'dark':
        return '🌙';
      case 'system':
        return '💻';
      default:
        return '💻';
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Light Mode';
      case 'dark':
        return 'Dark Mode';
      case 'system':
        return 'System Theme';
      default:
        return 'System Theme';
    }
  };

  return React.createElement('button', {
    onClick: toggleTheme,
    className: 'theme-toggle',
    'aria-label': `Switch to ${getLabel()}`,
    title: getLabel()
  }, [
    React.createElement('span', { key: 'icon', className: 'theme-icon' }, getIcon()),
    React.createElement('span', { key: 'label', className: 'theme-label' }, getLabel())
  ]);
};

export default ThemeToggle;
