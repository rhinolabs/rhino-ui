import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/**/*.{ts,tsx}",
		"components/**/*.{ts,tsx}",
		"./node_modules/@shadcn/ui/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [tailwindcssAnimate],
};

export default config;
