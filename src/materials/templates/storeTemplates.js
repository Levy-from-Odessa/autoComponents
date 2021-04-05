const FULL_STORE_DIR = '/store/full/'
const SINGLE_STORE_DIR = '/store/single/'
const DEFAULT_STORE_DIR = '/store/default/'

const templates = {
    // DEFAULT
    default: {
        actions: name => ({
            file: 'actions.js',
            content: DEFAULT_STORE_DIR + 'actions.js'
        }),

        mutation: name => ({
            file: `mutation.js`,
            content: DEFAULT_STORE_DIR + 'mutations.js'

        }),
        
        mutationType: name => ({
            file: `mutation_types.js`,
            content: DEFAULT_STORE_DIR + 'mutation_types.js'
        }),

        index: name => ({
            file: `index.js`,
            content: DEFAULT_STORE_DIR + 'index.js'

        })

    },
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

        mutationType: name => ({
            file: `mutation_types.js`,
            content: FULL_STORE_DIR + 'mutation_types.js'
        }),

        index: name => ({
            file: `index.js`,
            content: FULL_STORE_DIR + 'index.js'

        })

    },


    // SINGLE
    single: {
        index: name => ({
            file: `index.js`,
            content: SINGLE_STORE_DIR + 'index.js'
        })

    }
}
module.exports = templates