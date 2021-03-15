
const fs = require("fs");
const componentTemplates = require('./componentTemplates.js')
// const storeTemplates = require('./storeTemplates.js')



const writeToPath = path => (file, content) => {
  const filePath = `${path}/${file}`;

  fs.writeFile(filePath, content, err => {
    if (err) throw err;
    console.log("Created file: ", filePath);
    return true;
  });
};


function noneExist(files, path, name) {
    const fileExists = path => file => fs.existsSync(`${path}/${file}`);


    const toFileMissingBool = file => !fileExists(path)(file(name).file);
    const checkAllMissing = (acc, cur) => acc && cur;


    return  Object.values(files)
      .map(toFileMissingBool)
      .reduce(checkAllMissing);
}


function createFiles(path, name, template, type) {
    const writePath = writeToPath(path)

    console.log(`Detected new component: ${name}, ${path}`);
    const files = componentTemplates[template]


    if(noneExist(files, path, name)){
      Object.entries(files).forEach(([template, value]) => {
          const templateContent = value(name)
        writePath( templateContent.file, templateContent.content);
      });
    }
}

module.exports = {createFiles}