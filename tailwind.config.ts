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
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) {
        // This breakpoint is used to target small to medium-sized devices such as tablets.
        // You can use 'tablet' in your Tailwind classes to apply styles for devices with a minimum width of 640px.
        // For example: `tablet:bg-red-500` applies a red background on tablet screens and larger.
        // }
        
        'laptop': '1024px',
        // => @media (min-width: 1024px) {
        // This breakpoint is used for medium-sized devices such as laptops.
        // Use 'laptop' in your Tailwind classes to apply styles for devices with a minimum width of 1024px.
        // For example: `laptop:text-lg` applies larger text on laptop screens and larger.
        // }
        
        'desktop': '1280px',
        // => @media (min-width: 1280px) {
        // This breakpoint targets large devices such as desktops.
        // Use 'desktop' in your Tailwind classes to apply styles for devices with a minimum width of 1280px.
        // For example: `desktop:p-10` applies larger padding on desktop screens and larger.
        // }
      },
      // ____________________________________________________________________
      boxShadow: {
        // call: shadow-thick
        thick: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      },
      dropShadow: {
        // call: drop-shadow-3xl/4xl etc...
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      // ____________________________________________________________________
      // Primevue preset color theme
      colors: {
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        'cslight': '#ffffff',
        'snow-white': '#FBF5F3',
        'paynes-blue': '#4F646F',
        'platinum': '#DEE7E7',
        'powder-blue': '#A4BFEB',
        'special-blue': '#172554',
        'delta-blue': '#3A405A',
        'columbia-blue': '#BFD5E2',
        'ghost-white': '#F0EFF4',
        'csdark': '#333333',
        'great-gray': '#29323C',
        'davys-gray': '#534D56',
        'jet-gray': '#2A2B2E',
        'gray-born': '#A6ADBB',
        'hot-orange': '#F75C02',
        'desperado-black': '#18181B',
        'war-gray': '#4C4D55',
        // 'icon-light-color': '#F75C02', // Light color (hot orange)
        // 'icon-dark-color': '#52A9FF',  // Dark color (custom blue)
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