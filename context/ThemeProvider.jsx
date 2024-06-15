"use client";

import React, { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('');

  const handleThemeChange = () => { 
    if (localStorage.theme === 'dark'){
      setMode('dark')
      document.documentElement.classList.add('dark')
    }
    else if(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('system')
      document.documentElement.classList.add('dark')
    } else {
      setMode('light')
      document.documentElement.classList.remove('dark')
    }
  }; 

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme not in themeProvider");
  }
  return context;
}
