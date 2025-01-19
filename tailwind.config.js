// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         glow: {
//           '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
//           '50%': { opacity: 1, transform: 'scale(1.2)' },
//         },
//         upDownAnimation: {
//           '0%': { transform: 'translateY(-10px)' },  // Start position
//           '50%': { transform: 'translateY(10px)' },   // Move down
//           '100%': { transform: 'translateY(-10px)' }, // Move back up
//         },
//       },
//       animation: {
//         glow: 'glow 3s ease-in-out infinite', // Slower glow animation (3s duration)
//         upDownAnimation: 'upDownAnimation 4s infinite ease-in-out',  // Slower up-down animation (4s duration)
//       },
//     },
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",  // Include page files
    "./components/**/*.{js,ts,jsx,tsx}",  // Include component files
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },  // Glow starts and ends
          '50%': { opacity: 1, transform: 'scale(1.2)' },      // Glow at maximum
        },
        upDownAnimation: {
          '0%': { transform: 'translateY(-10px)' },   // Start position (up)
          '50%': { transform: 'translateY(10px)' },   // Move down
          '100%': { transform: 'translateY(-10px)' }, // Back to start
        },
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite', // Slower glow animation (3 seconds)
        upDownAnimation: 'upDownAnimation 4s infinite ease-in-out', // Smooth up-down animation
      },
      colors: {
        primary: '#1e90ff',  // Custom primary blue color
        secondary: '#ff6347',  // Custom secondary red color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Adding Inter font as default sans
      },
    },
  },
  plugins: [],
};
