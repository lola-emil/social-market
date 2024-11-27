module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano: {
            preset: ['default', {
                discardComments: { removeAll: true } // This ensures all comments are removed
            }]
        }
    }
}