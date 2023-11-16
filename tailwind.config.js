/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
   "vsm" : {'max': '549px'}, 
   'sm': {'max': '679px'},  
   'md': {'max': '979px'},  
   'lg': '980px', 
   'xl': '1280px', 
 },
    maxWidth : {
      "1216" : "1216px",
      "936" : "936px",
      "728" : "728px",
    },
    colors : {
      "white" : "#fff",
      "black" : "black",
      "bg-lite" : "#EDF2F6",
      "bg-dark" : "#17181C",
      "header-bg-lite" : "#101828",
      "header-bg-dark" : "#000000",
      "heading-text-lite" : "#101828",
      "heading-text-dark" : "#F5F5F6",
      "template-item-text-default-lite" : "#2D384B",
      "template-item-text-dark" : "#CECFD2",
      "template-item-text-active-lite" : "#0B3BEC",
      "template-card-item-text-lite" : "#475467",
      "template-card-item-text-dark" : "#94969C",
      "template-card-item-bg-lite" : "#FFFFFF",
      "template-card-item-bg-dark" : "#000000",
      "items-border-lite" : "#D0D5DD",
      "items-border-dark" : "#333741", 
      "search-template-input-bg-lite" : "#E3EAEF",
      "search-template-input-bg-dark" : "#21242C",
      "bg-home-white" : "rgba(237, 242, 246, 1)",
      "active-btn-white" : "rgba(11, 59, 236, 1)",
      "active-text-color-white" : "rgba(255, 255, 255, 1)",
      "text-color-white" : "rgba(152, 162, 179, 1)",
      "black-text" : "rgba(16, 24, 40, 1)",
    },
    boxShadow : {
      "logo-shadow" : "10px 0px 18px -6px rgba(11, 59, 236, 1)",
      "arrow-r-20-lite" : "0px 0px 9px 13px #EDF2F6",
      "arrow-r-20-dark" : "0px 0px 9px 13px #17181C",
      "chat-items" : "0px 0px 9px 13px #EDF2F6",
    },
    extend: {
      fontFamily : {
        "TTNormsMedium" : ["TTNormsMedium"],
        "NeueMachinaBold" : ["NeueMachinaBold"],
        "TTNormsRegular" : ["TTNormsRegular"],
        "InterMedium" : ["InterMedium"],
        "InterRegular" : ["InterRegular"],
        "InterBold" : ["InterBold"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode : "class"
}