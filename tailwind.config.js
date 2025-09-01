/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        atom: {
          "0%": {
            borderRadius: "50%",              
            transform: "translate(0px, 0px) rotate(0deg) scale(1)",
          },
          "20%": {
            borderRadius: "48% 52% 52% 48% / 52% 48% 52% 48%", 
            transform: "translate(-6px, -4px) rotate(-4deg) scale(0.99)",
          },
          "40%": {
            borderRadius: "60% 30% 80% 20% / 30% 60% 20% 80%", 
            transform: "translate(10px, 8px) rotate(6deg) scale(1.02)",
          },
          "60%": {
            borderRadius: "35% 65% 45% 55% / 50% 30% 70% 40%",
            transform: "translate(-8px, 6px) rotate(-8deg) scale(1.01)",
          },
          "80%": {
            borderRadius: "52% 48% 52% 48% / 48% 52% 48% 52%",
            transform: "translate(3px, -3px) rotate(3deg) scale(1)",
          },
          "100%": {
            borderRadius: "50%",                 
            transform: "translate(0px, 0px) rotate(0deg) scale(1)",
          },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        atom: "atom 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
