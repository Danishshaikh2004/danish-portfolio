/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        border: "#1e293b",
        primary: "#38bdf8",
        background: {
          DEFAULT: "#0b0f19",
          secondary: "#111827",
          darker: "#0a0e17",
        },
        accent: {
          blue: "#38bdf8",
          cyan: "#22d3ee",
          green: "#22c55e",
        },
        text: {
          primary: "#e5e7eb",
          secondary: "#9ca3af",
          muted: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        typing: {
          "0%, 100%": { width: "0" },
          "50%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "#38bdf8" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(56, 189, 248, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(56, 189, 248, 0.6)" },
        },
        "orbit": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "float-rotate": {
          "0%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(5deg)" },
          "100%": { transform: "translateY(0px) rotate(0deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-reverse": "spin 12s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "float-rotate": "float-rotate 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "50px 50px",
      },
    },
  },
  plugins: [],
};

