module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 20px rgba(34, 211, 238, 0.5)',
        'glow-lg': '0 0 30px rgba(34, 211, 238, 0.7)',
      },
      dropShadow: {
        'glow': '0 0 10px rgba(34, 211, 238, 0.5)',
        'glow-lg': '0 0 20px rgba(34, 211, 238, 0.7)',
      },
    },
  },
  plugins: [],
}; 