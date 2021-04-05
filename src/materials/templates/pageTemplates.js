const FULL_PAGE_DIR = '/pages/full/'
const SINGLE_PAGE_DIR = '/pages/single/'

const templates = {

    // SINGLE
    single: {
        index: name => ({
            file: 'index.vue',
            content: SINGLE_PAGE_DIR + 'index.vue'
        })

    }
}
module.exports = templates