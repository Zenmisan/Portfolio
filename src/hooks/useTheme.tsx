import React, { createContext, useContext, useState, useEffect } from 'react';

export type AestheticMode = 'minimal' | 'futuristic';

interface ThemeContextType {
  mode: AestheticMode;
  setMode: (mode: AestheticMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<AestheticMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aesthetic-mode');
      return (saved as AestheticMode) || 'minimal';
    }
    return 'minimal';
  });

  useEffect(() => {
    localStorage.setItem('aesthetic-mode', mode);
    document.documentElement.setAttribute('data-aesthetic', mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'minimal' ? 'futuristic' : 'minimal'));
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
