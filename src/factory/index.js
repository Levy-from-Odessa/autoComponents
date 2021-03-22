const fs = require("fs");
const swig = require("swig")
const path = require('path');

const componentTemplates = require('../templates/componentTemplates.js')
const storeTemplates = require('../templates/storeTemplates.js')
const pageTemplates = require('../templates/pageTemplates.js')


const { error, success } = require('../messages')


const BLUEPRINT_DIR =  path.dirname(require.main.filename) +'/blueprints'

const templateStorage = {
  components: componentTemplates,
  store: storeTemplates,
  pages: pageTemplates
}




// create file with data
const writeToPath = path => (file, content) => {
  const filePath = `${path}/${file}`;

  fs.writeFile(filePath, content, err => {
    if (err){ error(err); throw err};
    success(`Created file: ${filePath}`);
    return true;
  });
};

// check existing of file
function noneExist(files, path, name) {
    const fileExists = path => file => fs.existsSync(`${path}/${file}`);


    const toFileMissingBool = file => !fileExists(path)(file(name).file);
    const checkAllMissing = (acc, cur) => acc && cur;


    return  Object.values(files)
      .map(toFileMissingBool)
      .reduce(checkAllMissing);
}


// render template with props
function compileTpl(file, {name}){ // actions?, filesType?
  const compiled = swig.compileFile(file)
  return compiled({name})
}  



function createFiles(filePath, name, template, type) {
    const writePath = writeToPath(filePath)

    success(`Detected new component: ${name}, ${filePath}`);
    const files = templateStorage[type][template]


    if(noneExist(files, filePath, name)){
      Object.entries(files).forEach(([template, value]) => {
        const templateContent = value(name)
        const tpl = compileTpl(BLUEPRINT_DIR + templateContent.content, {name})
        writePath(templateContent.file, tpl);
      });
    }
}

module.exports = { createFiles }