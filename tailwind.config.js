module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1E1B29', // Dark background with purple undertone
        surface: '#272335', // Slightly lighter for cards and forms
        accent: '#7F56D9', // Soothing purple accent
        textPrimary: '#E0E0E0', // Light text color
        textSecondary: '#A6A6A6', // Muted text for placeholders
      },
    },
  },
  plugins: [],
};
