// ---------------------------------------------------------
//                  Store > UseDarkmodeStore
// ---------------------------------------------------------
import { defineStore } from 'pinia';
import { useDark, useToggle } from '@vueuse/core';
// ---------------------------------------------------------

export const UseDarkmodeStore = defineStore('darkmodeStore', () => {
  // Determine the user's system preference for dark mode
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Set initial color scheme based on system preference
  const initialColorScheme: 'dark' | 'light' = prefersDarkScheme ? 'dark' : 'light';
  
  const isDark = useDark({
    selector: 'body',
    onChanged(isDark) {
      isDark
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    },
    
    // Set initial value based on system preference
    initialValue: initialColorScheme,
  });
  
  const toggleDarkMode = useToggle(isDark);
  
  return { isDarkMode: isDark, toggleDarkMode };
});
// ---------------------------------------------------------












