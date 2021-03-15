
const fs = require("fs");
const swig = require("swig")
const BLUEPRINT_DIR = process.cwd() + '/blueprints'

const componentTemplates = require('./componentTemplates.js')
const storeTemplates = require('./storeTemplates.js')

const templateStorage = {
  component: componentTemplates,
  store: storeTemplates
}




// create file with data
const writeToPath = path => (file, content) => {
  const filePath = `${path}/${file}`;

  fs.writeFile(filePath, content, err => {
    if (err) throw err;
    console.log("Created file: ", filePath);
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

    console.log(`Detected new component: ${name}, ${filePath}`);
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