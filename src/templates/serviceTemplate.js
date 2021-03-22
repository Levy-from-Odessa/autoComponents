
const FULL_PAGE_DIR = '/pages/full/'
const SINGLE_SERVICE_DIR = '/services/single/'

const templates = {

    // SINGLE
    single: {
        index: name => ({
            file: `${name}Service.vue`,
            content: SINGLE_SERVICE_DIR + 'service.js'
        })

    }
}
module.exports = templates