const fs = require('fs');

const chokidar = require("chokidar");

const factory = require("./factory/index")

const { error, success } = require('./messages')


function isEmptyDir(path) {
    return fs.readdirSync(path).length === 0;
}

function getFileName(path){
    // get file
    const pathArray = path.split('/')
    const file = pathArray[pathArray.length - 1]

    let name = file
    
    if (!name.includes("/")) {
      return name 
    }
    
} 
function getProps(file) {
    let name = file
    let template = 'single'

    const typeFile = file[0]
    if (typeFile === typeFile.toLowerCase()) {
    name = file.slice(1, file.length)
      if (typeFile === 's') {
        template = 'single'
      }
      if (typeFile === 'f') {
        template = 'full'
      }
    }else {
      return
    }

    return {name , template}

}

function watchSetup(path, type){
    const file = getFileName(path)
    if (file === type || !isEmptyDir(path)) {
      return
    }

    const fileInfo = getProps(file);
    if (fileInfo) {
      const { name, template } = fileInfo
      const newPath = `${type}/${name}`
      try {
        if (!fs.existsSync(newPath)) {
          fs.renameSync(path, newPath);
          success("Renamed the file!")
        } else {
          throw  `EXIST this folder already exists, please rename this file - ${path}`
        }

      } catch(err) {error(err); throw err}


      if (fs.existsSync(newPath)) {
        factory.createFiles(newPath, name,  template, type)
      }
      
    }
}


// !MAIN


const componentWatcher = chokidar
  .watch("components/**/**", { ignored: /node_modules/ })

const pageWatcher = chokidar
  .watch("pages/**/**", { ignored: /node_modules/ })

const storeWatcher = chokidar
  .watch("store/**/**", { ignored: /node_modules/ })
  



componentWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'components')
  });


pageWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'pages')
  });


storeWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'store')
  });