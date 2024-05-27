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
    './src/components/*.{vue,js,ts,jsx,tsx}',
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
        'snow-white-bg': '#FBF5F3',
        'paynes-blue-bg': '#4F646F',
        'platinum-bg': '#DEE7E7',
        'powder-blue-bg': '#A4BFEB',
        'delta-blue-bg': '#3A405A',
        'columbia-blue-bg': '#BFD5E2',
        'ghost-white-bg': '#F0EFF4',
        'csdark': '#333333',
        'great-gray': '#29323C',
        'davys-gray': '#534D56',
        'jet-gray': '#2A2B2E',
        'gray-born': '#A6ADBB',
        'hot-orange': '#F75C02',
        'desperado-black': '#18181B',
        'war-gray': '#4C4D55',
        // ____________________________________________________________________
      },
      // ____________________________________________________________________
    },
  },
  // ____________________________________________________________________
  plugins: [
    daisyui,
  ],
};