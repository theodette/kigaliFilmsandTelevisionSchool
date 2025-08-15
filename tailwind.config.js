/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {backgroundImage: {
      'bg-image': "url('/public/2.jpeg')",
      'bg-image1': "url('/public/3.jpeg')",
      'bg-image2': "url('/public/4.jpeg')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 5s ease-out 0s forwards', // 1s duration, 3s delay
      },
    },
  },
  plugins: [],
};
