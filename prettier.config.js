/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    singleQuote: true,
    jsxSingleQuote: true,
    tabWidth: 4,
    printWidth: 120,
    plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
