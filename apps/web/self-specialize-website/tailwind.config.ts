import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        muted: '#4b5563',
        line: '#dbe5e7',
        surface: '#f8fbfb',
        accent: '#0f766e',
        accentSoft: '#dff4f2',
      },
      boxShadow: {
        card: '0 16px 40px rgba(17, 24, 39, 0.06)',
      },
      maxWidth: {
        page: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
