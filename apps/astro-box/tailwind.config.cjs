/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                mono: ["Space Mono", "monospace"],
                rubik: ["Rubik Glitch", "sans-serif"],
            },
        },
    },
    plugins: [],
};
