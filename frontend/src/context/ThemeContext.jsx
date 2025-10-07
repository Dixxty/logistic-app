import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    // Limpa localStorage antigo conflitante (só uma vez)
    if (localStorage.getItem('theme')) {
      localStorage.removeItem('theme');
    }
    
    // Carrega preferência salva no localStorage
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return false; // Padrão: modo claro
  });

  useEffect(() => {
    console.log('ThemeContext: darkMode mudou para', darkMode);
    
    // Salva preferência no localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    // Adiciona/remove classe dark no html
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      console.log('ThemeContext: Classe dark ADICIONADA');
    } else {
      root.classList.remove('dark');
      console.log('ThemeContext: Classe dark REMOVIDA');
    }
    
    // Verificação
    console.log('Classes no HTML:', root.className);
  }, [darkMode]);

  const toggleDarkMode = () => {
    console.log('ThemeContext: toggleDarkMode chamado');
    setDarkMode(prev => {
      console.log('ThemeContext: Mudando de', prev, 'para', !prev);
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider');
  }
  return context;
}