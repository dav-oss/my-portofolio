module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a2238",
        accent: "#9daaf2",
        highlight: "#ff6a3d",
        background: "#f6f6f6",
        card: "#ffffff",
        text: "#22223b",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        classy: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
