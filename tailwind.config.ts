import type { Config } from "tailwindcss";
import tailwindClipPath from 'tailwind-clip-path';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  theme: {
    extend: {
      clipPath: {
        'my-custom-shape': 'polygon(40% 0%, 0% 100%, 100% 100%, 100% 0%)',
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fit,minmax(200px, 1fr))'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [tailwindClipPath],
} satisfies Config;
