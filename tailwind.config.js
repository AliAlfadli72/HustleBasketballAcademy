export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00", // Blazing Basketball Orange
        dark: "#0D0D0D",    // Extreme Dark Slate/Black
        silver: "#A6A6A6",  // Readable Body Copy
        accent: "#161616",  // Dark card background
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}