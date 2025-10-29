const config = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary: "#5B8291",
        "background-light": "#EAEBED",
        "background-dark": "#2E424D",
        "text-light": "#2E424D",
        "text-dark": "#EAEBED",
        "accent-light": "#5B8291",
        "accent-dark": "#98DAD9",
        "cta-light": "#98DAD9",
        "cta-dark": "#5B8291",
      },
      fontFamily: {
       display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
    
  },
};

export default config;
