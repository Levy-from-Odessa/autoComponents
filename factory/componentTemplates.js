const FULL_COMPONENT_DIR = '/components/full/'
const SINGLE_COMPONENT_DIR = '/components/single/'

const templates = {
    // FULL
    full: {
        index: name => ({
            file: 'index.vue',
            content: FULL_COMPONENT_DIR + 'index.vue'
        }),

        js: name => ({
            file: `${name}.js`,
            content: FULL_COMPONENT_DIR + 'script.js'

        }),

        scss: name => ({
            file: `style.scss`,
            content: FULL_COMPONENT_DIR + 'style.scss'

        })

    },




    // SINGLE
    single: {
        index: name => ({
            file: 'index.vue',
            content: SINGLE_COMPONENT_DIR + 'index.vue'
        })

    }
}
module.exports = templates