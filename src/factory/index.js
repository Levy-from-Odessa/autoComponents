const fs = require("fs");
const swig = require("swig")
const path = require('path');

const componentTemplates = require('../materials/templates/componentTemplates.js')
const storeTemplates = require('../materials/templates/storeTemplates.js')
const pageTemplates = require('../materials/templates/pageTemplates.js')


const { error, success } = require('../materials/messages')


const BLUEPRINT_DIR =  path.dirname(require.main.filename) +'/materials/blueprints'

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


swig.setFilter('camelCase', (input)=> {
    return input.split('_').map(function(word,index){
      if(index == 0){
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
})

swig.setFilter('fullName', (input)=> {

  const arrPath = input.split('/')
  const rootIndex = arrPath.findIndex( item => item === 'components')
  const fullName = arrPath.slice(rootIndex + 1, arrPath.length).join('_')
  
  return fullName
  
})
// render template with props
function compileTpl(file, {name, filePath}) { // actions?, filesType?
  const compiled = swig.compileFile(file)
  return compiled({name, filePath})
}  



function createFiles(filePath, name, template, type) {
    const writePath = writeToPath(filePath)

    success(`Detected new component: ${name}`);
    const files = templateStorage[type][template]


    if(noneExist(files, filePath, name)){
      Object.entries(files).forEach(([template, value]) => {
        const templateContent = value(name)
        const tpl = compileTpl(BLUEPRINT_DIR + templateContent.content, {name, filePath})
        writePath(templateContent.file, tpl);
      });
    }
}

module.exports = { createFiles }