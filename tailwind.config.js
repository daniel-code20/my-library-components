/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,html,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%, 40%, 100%": { transform: "scaleY(0.4)" },
          "20%": { transform: "scaleY(1)" },
        },
        fadeDot: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "wave-delay-0": "wave 1.2s infinite ease-in-out",
        "wave-delay-1": "wave 1.2s infinite ease-in-out 0.2s",
        "wave-delay-2": "wave 1.2s infinite ease-in-out 0.4s",
        "fade-dot": "fadeDot 1s ease-in-out infinite",
      },
      transitionDelay: {
        0: "0ms",
        200: "200ms",
        400: "400ms",
      },
    },
  },
  plugins: [],
};
