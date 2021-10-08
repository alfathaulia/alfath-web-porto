const colors = require('tailwindcss/colors');
module.exports = {
    important: true,
    purge: {
        content: ['./pages/**/*.tsx'],
    },
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            primary: '#E6DED7',
            primary2: '#F8F4F0',
            primaryFont: '#121212',
            white: '#FFFFFF',
            gray: colors.coolGray,
            blue: colors.sky,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    variants: {},
    plugins: [],
    future: {
        purgeLayersByDefault: true,
    },
};
