// ---------------------------------------------------------
//                    tailwind.config.ts
// ---------------------------------------------------------

import daisyui from 'daisyui';
// ---------------------------------------------------------


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // This enables dark mode based on the presence of the "dark" class in the HTML tag
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    // ____________________________________________________________________
    extend: {
      // ____________________________________________________________________
      backgroundImage: {
        'parallax-flags': 'url(\'/src/assets/images/many-flags.jpg\')',
      },
      // ____________________________________________________________________
      // Primevue preset color theme
      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        'cslight-txt': '#ffffff',
        'csdark': '#333333',
        'great-gray': '#29323C',
        'davys-gray': '#534D56',
        'jet-gray': '#2A2B2E',
        'gray-born': '#A6ADBB',
        'hot-orange': '#F75C02',
        'desperado-black': '#18181B',
        'war-gray': '#4C4D55',
        // ____________________________________________________________________
        primary: 'rgb(var(--primary))',
        'primary-inverse': 'rgb(var(--primary-inverse))',
        'primary-hover': 'rgb(var(--primary-hover))',
        'primary-active-color': 'rgb(var(--primary-active-color))',
        
        'primary-highlight': 'rgb(var(--primary)/var(--primary-highlight-opacity))',
        'primary-highlight-inverse': 'rgb(var(--primary-highlight-inverse))',
        'primary-highlight-hover': 'rgb(var(--primary)/var(--primary-highlight-hover-opacity))',
        
        'primary-50': 'rgb(var(--primary-50))',
        'primary-100': 'rgb(var(--primary-100))',
        'primary-200': 'rgb(var(--primary-200))',
        'primary-300': 'rgb(var(--primary-300))',
        'primary-400': 'rgb(var(--primary-400))',
        'primary-500': 'rgb(var(--primary-500))',
        'primary-600': 'rgb(var(--primary-600))',
        'primary-700': 'rgb(var(--primary-700))',
        'primary-800': 'rgb(var(--primary-800))',
        'primary-900': 'rgb(var(--primary-900))',
        'primary-950': 'rgb(var(--primary-950))',
        
        'surface-0': 'rgb(var(--surface-0))',
        'surface-50': 'rgb(var(--surface-50))',
        'surface-100': 'rgb(var(--surface-100))',
        'surface-200': 'rgb(var(--surface-200))',
        'surface-300': 'rgb(var(--surface-300))',
        'surface-400': 'rgb(var(--surface-400))',
        'surface-500': 'rgb(var(--surface-500))',
        'surface-600': 'rgb(var(--surface-600))',
        'surface-700': 'rgb(var(--surface-700))',
        'surface-800': 'rgb(var(--surface-800))',
        'surface-900': 'rgb(var(--surface-900))',
        'surface-950': 'rgb(var(--surface-950))',
      },
      // ____________________________________________________________________
    },
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }
    //
    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }
    //
    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }
    //
    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    //
    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
  },
  // ____________________________________________________________________
  plugins: [
    daisyui,
  ],
};