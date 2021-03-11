const chokidar = require("chokidar");
const fs = require("fs");
const componentTemplate = require('./templates/component')

const fileExists = path => file => fs.existsSync(`${path}/${file}`);

const writeToPath = path => (file, content) => {
  const filePath = `${path}/${file}`;

  fs.writeFile(filePath, content, err => {
    if (err) throw err;
    console.log("Created file: ", filePath);
    return true;
  });
};
/* 
  @params path  - the folder was created
  @params name  - it name
*/
function createFiles(path, name) {
  const files = {
    index: "index.jsx",
    test: `${name}.test.js`,
    sass: `${name}.sass`
  };

  if (name !== "components") {
    const writeFile = writeToPath(path);
    const toFileMissingBool = file => !fileExists(path)(file);
    const checkAllMissing = (acc, cur) => acc && cur;

      console.log('resatrt');
    const noneExist = Object.values(files)
      .map(toFileMissingBool)
      .reduce(checkAllMissing);

    if (noneExist) {
      console.log(`Detected new component: ${name}, ${path}`);
      Object.entries(files).forEach(([type, fileName]) => {
        writeFile(fileName, componentTemplates[type](name));
      });
    }
  }
}

chokidar
  .watch("src/components/**", { ignored: /node_modules/ })
  .on("addDir", (path, event) => {
    const name = path.replace(/.*\/components\//, "");
      console.log(name);
    if (!name.includes("/")) {
      createFiles(path, name);
    }
  });