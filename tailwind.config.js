module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Saira Stencil One', 'sans-serif'], // Define a custom font family for headings
        body: ['Inter', 'sans-serif'], // Define a custom font family for body text
      },
    },
  },
  plugins: [],
};
