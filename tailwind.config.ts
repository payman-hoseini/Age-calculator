import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        'Purple' : 'hsl(259, 100%, 65%)',
        'Light-red' : 'hsl(0, 100%, 67%)',
        'Off-white' : 'hsl(0, 0%, 94%)',
        'Light-grey' : 'hsl(0, 0%, 86%)',
        'Smokey-grey' : 'hsl(0, 1%, 44%)',
        'Off-black' : 'hsl(0, 0%, 8%)',
      },
      fontFamily : {
        Poppins : ['Poppins']
      }
    },
  },
  plugins: [],
};
export default config;
