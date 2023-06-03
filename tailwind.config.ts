import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    gray: {
      100: "#F4F7FF",
    },
  },
} satisfies Config;
