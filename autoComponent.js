const fs = require('fs');

const chokidar = require("chokidar");

const factory = require("./factory/index")

const { error, success } = require('./messages')

// TODO find root folder
const splitedDirname = __dirname.split('/')
const rootSplitedDirname = splitedDirname.slice(0, splitedDirname.length - 2)
const rootFolder = rootSplitedDirname.join('/')

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
      const newPathArray = path.split('/')
      newPathArray.splice(newPathArray.length - 1, 1, name)
      const newPath = newPathArray.join('/')
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


success('Start watching')
const componentWatcher = chokidar
  .watch(rootFolder + "/components/**/**", { ignored: /node_modules/ })

const pageWatcher = chokidar
  .watch(rootFolder + "/pages/**/**", { ignored: /node_modules/ })

const storeWatcher = chokidar
  .watch(rootFolder + "/store/**/**", { ignored: /node_modules/ })
  



componentWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'components')
  });


pageWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'pages')
  });


storeWatcher.on("addDir", (path, event) => {
    watchSetup(path, 'store')
  });