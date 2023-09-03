/** @type {import('tailwindcss').Config}*/
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '500px', // Custom breakpoint
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px'
            }
        }
    },
    plugins: []
}
