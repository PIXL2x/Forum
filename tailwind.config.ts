import type { Config } from "tailwindcss";

export default {
    content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                pretendard: ["var(--font-pretendard)"],
            },
        },
    },
    daisyui: {
        themes: [
            {
                light: {
                    "color-scheme": "light",
                    primary: "#3F9DFF",
                    secondary: "#D5D6D7",
                    "secondary-content": "oklch(98.71% 0.0106 342.55)",
                    accent: "oklch(76.76% 0.184 183.61)",
                    neutral: "#464E55",
                    "neutral-content": "#868E96",
                    "base-100": "#FFFFFF",
                    "base-200": "#F5F6F7",
                    "base-300": "#E9EAEB",
                    "base-content": "#181C18",
                },
            },
            {
                dark: {
                    "color-scheme": "dark",
                    primary: "oklch(65.69% 0.196 275.75)",
                    secondary: "#191A1B",
                    accent: "oklch(74.51% 0.167 183.61)",
                    neutral: "#2a323c",
                    "neutral-content": "#A6ADBB",
                    "base-100": "#1d232a",
                    "base-200": "#191e24",
                    "base-300": "#15191e",
                    "base-content": "#A6ADBB",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
} satisfies Config;
