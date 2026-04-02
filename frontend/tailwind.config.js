/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-container": "#00816f",
        "primary-fixed": "#dae2ff",
        "surface-variant": "#e0e3e5",
        "secondary-fixed-dim": "#bac3ff",
        "secondary": "#2b4cda",
        "tertiary-fixed-dim": "#44ddc1",
        "surface": "#f7f9fb",
        "surface-tint": "#0c56d0",
        "on-primary-fixed-variant": "#0040a2",
        "on-tertiary-container": "#e1fff6",
        "inverse-on-surface": "#eff1f3",
        "on-tertiary-fixed-variant": "#005145",
        "primary": "#0051c9",
        "on-secondary-fixed": "#001159",
        "inverse-surface": "#2d3133",
        "surface-container-highest": "#e0e3e5",
        "error-container": "#ffdad6",
        "on-secondary": "#ffffff",
        "surface-container-high": "#e6e8ea",
        "on-background": "#191c1e",
        "error": "#ba1a1a",
        "on-secondary-container": "#fffbff",
        "tertiary-fixed": "#68fadd",
        "primary-container": "#316be4",
        "on-error-container": "#93000a",
        "on-error": "#ffffff",
        "surface-dim": "#d8dadc",
        "primary-fixed-dim": "#b2c5ff",
        "on-primary": "#ffffff",
        "outline-variant": "#c2c6d8",
        "surface-container": "#eceef0",
        "on-secondary-fixed-variant": "#0031c4",
        "secondary-fixed": "#dee1ff",
        "tertiary": "#006657",
        "surface-container-low": "#f2f4f6",
        "on-tertiary-fixed": "#00201a",
        "inverse-primary": "#b2c5ff",
        "background": "#f7f9fb",
        "on-primary-fixed": "#001848",
        "on-surface": "#191c1e",
        "surface-container-lowest": "#ffffff",
        "outline": "#727687",
        "secondary-container": "#4967f4",
        "surface-bright": "#f7f9fb",
        "on-surface-variant": "#424656",
        "on-primary-container": "#f8f7ff",
        "on-tertiary": "#ffffff"
      },
      fontFamily: {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Inter"],
        "manrope": ["Manrope"],
        "inter": ["Inter"]
      },
      borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "blob": {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "blob": "blob 7s infinite"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
