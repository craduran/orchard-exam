/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            // you can configure the container to be centered
            center: true,

            // or have default horizontal padding
            padding: '1rem',

            // default breakpoints but with 40px removed
            screens: {
                sm: '600px',
                md: '728px',
                lg: '1270px',
                xl: '1270px',
                '2xl': '1270px',
            },
        },
        extend: {
            colors: {
                darkred: '#CF1430'
            },
            fontFamily: {
                primary: ['OpenSans', 'sans-serif'],
                primaryCondensed: ['OpenSans_Condensed', 'sans-serif'],
                primarySemiCondensed: ['OpenSans_SemiCondensed', 'sans-serif'],
            },
            fontSize: {
                '2xl': ['1.7rem', {
                    lineHeight: '2rem',
                }],
                '4-1\/2xl': ['2.35rem', {
                    lineHeight: '2.5rem',
                }],
                'lg': ['1.130rem', {
                    lineHeight: '1.87rem',
                }],
                'base': ['1.102rem', {
                    lineHeight: '1.5rem',
                }]
            },
            padding: {
                '8-1\/2': '1.87rem'
            }
        },
    }
}