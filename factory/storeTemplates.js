const FULL_STORE_DIR = '/store/full/'
const SINGLE_STORE_DIR = '/store/single/'

const templates = {
    // FULL
    full: {
        actions: name => ({
            file: 'actions.js',
            content: FULL_STORE_DIR + 'actions.js'
        }),

        mutation: name => ({
            file: `mutation.js`,
            content: FULL_STORE_DIR + 'mutations.js'

        }),

        index: name => ({
            file: `index.js`,
            content: FULL_STORE_DIR + 'index.js'

        })

    },




    // SINGLE
    single: {
        index: name => ({
            file: `${name}.js`,
            content: SINGLE_STORE_DIR + 'index.js'
        })

    }
}
module.exports = templates