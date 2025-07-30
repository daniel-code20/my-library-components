import React, { useEffect, useState } from 'react';

export const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // Al cargar, detecta y aplica el modo correcto
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldUseDark = saved === 'dark' || (!saved && prefersDark);
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-all"
    >
      {isDark ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
    </button>
  );
};
