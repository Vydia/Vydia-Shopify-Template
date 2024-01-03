/** @type {import('postcss').Postcss} */
module.exports = {
    plugins: {
        lost: {},
        'postcss-simple-vars': {},
        'postcss-mixins': {},
        'postcss-nested': {},
        'postcss-focus': {},
        'postcss-for': {},
        'postcss-each': {
            plugins: {
                afterEach: [require("postcss-simple-vars")]
            }
        },
        autoprefixer: {}
    }
}