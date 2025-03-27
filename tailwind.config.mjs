/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        georgia: ['"Source Serif 4"','Georgia', 'serif'],
        Helvetica: ['"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'],
      },
      
    },
  },
  plugins: [],
};
